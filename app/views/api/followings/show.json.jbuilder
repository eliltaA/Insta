json.extract! @following, :id, :follower_id, :followee_id
json.follower @following.follower.username
json.followee @following.followee.username
