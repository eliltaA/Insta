class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.text :caption
      t.references :author, null: false, foreign_key: { to_table: :users}
      t.timestamps
    end
  end
end
