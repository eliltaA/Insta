class Api::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names + ['password']

    # def search
    #   query = params[:q]
    #   users = User.where("username ILIKE ?", "%#{query}%")
    
    #   render json: users
    # end

    def index
      if params[:search] 
        @users = User.where("username ILIKE '%#{params[:search]}%' ")
        render :search
      else
        @users = User.all 
        render :index
      end
      end 

      def create
        @user = User.new(user_params)
        if @user.save!
          login(@user)
          render :show
        else
          render json: {errors: @user.errors.full_messages}, status: 422
        end
      end
    
      def show 
        # @user = User.find(params[:id])
        # @posts = @user.posts
        @user = User.includes(:posts).find(params[:id])
        render :show
      end
    
      def update 
        @user = User.find(params[:id])
        # debugger
        # @user.id = current_user.id
        if @user.update(user_params)
          render :show 
        else
          render json: {errors: @user.errors.full_messages}, status: 422
        end
      end

      def delete_pro_pic 
        @user = User.find(params[:id])
        @user.profile_picture.purge
        render :show
      end
    
      private
      def user_params
        params.require(:user).permit(:username, :email, :password, :name, :bio, :profile_picture, :id)
      end
end
