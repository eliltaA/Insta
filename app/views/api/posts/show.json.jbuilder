   json.extract! @post, :id, :caption, :author_id, :created_at
   json.photoUrl url_for(@post.photo)
   json.username @post.author.username
   json.profile_picture @post.author.profile_picture.url 
   # json.post @post.comments