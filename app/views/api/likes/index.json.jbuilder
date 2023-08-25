@likes.each do |like|
    json.set! like.id do 
        json.extract! like, :id, :user_id, :likeable_type, :likeable_id
        json.username like.user.username
        json.profile_picture like.user.profile_picture.url
    end 
end