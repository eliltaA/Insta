json.extract! user, :id, :username, :email, :name, :bio
json.profile_picture_url user.profile_picture.attached? ? url_for(user.profile_picture) : nil
