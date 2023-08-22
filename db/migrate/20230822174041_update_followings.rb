class UpdateFollowings < ActiveRecord::Migration[7.0]
  def change
    add_index :followings, [:followee_id, :follower_id], unique: true
  end
end
