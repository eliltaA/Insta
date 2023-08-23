class Api::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names + ['password']

    # def search
    #   query = params[:q]
    #   users = User.where("username ILIKE ?", "%#{query}%")
    
    #   render json: users
    # end

    def index
        @users = User.all 
        render :index
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
        if @user.update(user_params)
          render :show 
        else
          render json: {errors: @user.errors.full_messages}, status: 422
        end
      end
    
      private
      def user_params
        params.require(:user).permit(:username, :email, :password, :name, :bio)
      end
end
