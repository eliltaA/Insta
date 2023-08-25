class CreateFollowings < ActiveRecord::Migration[7.0]
  def change
    create_table :followings do |t|
      t.references :following, null: false,  foreign_key: { to_table: :users}
      t.references :followers, null: false,  foreign_key: { to_table: :users}
      t.timestamps
    end
  end
end
