class Api::LikesController < ApplicationController

    def index
        @likes = Like.all
        render :index
    end

    def show
        @like = Like.find(params[:id])
        @post = @like.likeable if @like.likeable_type == "Post"
        @comment = @like.likeable if @like.likeable_type == "Comment"
        render :show
    end

    def create
        @like = Like.new(like_params)
        # @like.user_id = current_user.id  
        if @like.save 
            render :show 
        else
            render json: {errors: @like.errors.full_messages}, status: 422 
        end 
    end

    def destroy
        @like = Like.find(params[:id])
        @like.destroy
    end

private 

    def like_params
        params.require(:like).permit(:user_id, :likeable_type, :likeable_id)
    end 
end
