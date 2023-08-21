class RenameCommentToCommentBody < ActiveRecord::Migration[7.0]
  def change
    rename_column :comments, :comment, :comment_body
  end
end
