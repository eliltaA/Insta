@followings.each do |following|
    json.set! following.id do 
        json.extract! following, :id, :follower_id, :followee_id
        json.follower following.follower.username
        json.followee following.followee.username
        json.follower_pro_pic following.follower.profile_picture.url
        json.followee_pro_pic following.followee.profile_picture.url
    end
end