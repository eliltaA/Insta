@followings.each do |following|
    json.set! following.id do 
        json.extract! following, :id, :follower_id, :followee_id
        json.follower following.follower.username
        json.followee following.followee.username
    end
end