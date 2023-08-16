class Api::PostsController < ApplicationController

    before_action :require_logged_in, only: [:destroy, :update]

    def index 
        @posts = Post.all
        render 'api/posts/index'
    end

    def show
        @post = Post.find(params[:id]) 
        render 'api/posts/show'
    end

    def create
        @post = post.new(post_params)
        @post.author_id = current_user.id
        if @post.save
            render :show
        else
            render json: {errors: @post.errors.full_messages}, status: 422 
        end
    end 

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params) 
            render 'api/posts/show'
        else
            redner json: {errors: @post.errors.full_messages}, status: 422
        end
    end

    def destroy
        @post = Post.find(params[:id]) 
        # @post = current_user.posts.find(params[:id])
        @post.destroy
    end

    private 
    def post_params
        params.require(:post).permit(:body, :author_id, :photo)
    end

end
