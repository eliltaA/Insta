json.extract! @like, :id, :user_id, :likeable_type, :likeable_id
json.username @like.user.username



json.set! @like.likeable_type.downcase do 
    if @like.likeable_type == "Post" 
        json.extract! @post, :id, :caption, :author_id, :created_at
        json.photoUrl url_for(@post.photo)     
    elsif @like.likeable_type == "Comment"
        json.extract! @comment, :id, :comment_body, :author_id, :post_id, :created_at 
    end 
end 