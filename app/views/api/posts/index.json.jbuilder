@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :id, :caption, :author_id, :created_at
        json.photoUrl post.photo.url
        json.username post.author.username
        json.profile_picture post.author.profile_picture.url
        # json.post post.comments
    end
end