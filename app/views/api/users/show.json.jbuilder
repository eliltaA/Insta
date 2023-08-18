json.user do 
    json.partial! "api/users/user", user: @user
end

json.posts do
@user.posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :caption, :author_id, :created_at
    json.photoUrl post.photo.url
  end
end
end