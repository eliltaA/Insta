   json.extract! @post, :id, :caption, :author_id, :created_at
   json.photoUrl url_for(@post.photo)
   