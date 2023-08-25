class RenameColumns < ActiveRecord::Migration[7.0]
  def change
    rename_column :followings, :following_id, :followee_id
    rename_column :followings, :followers_id, :follower_id
  end
end
