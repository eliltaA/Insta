class Api::FollowingsController < ApplicationController

    def index 
        @followings = Following.all()
    end

    def show 
        @following = Following.find(params[:id])
        render :show
    end

    def create
        @following = Following.new(following_params)
        if @following.save
            render :show
        else 
            render json: {errors: @following.errors.full_messages}, status: 422
        end
    end

    def destroy
        # debugger
        # binding.pry
        @following = Following.find(params[:id])
        @following.destroy
    end

    private 
    def following_params
        params.require(:following).permit(:followee_id, :follower_id)
    end
end
