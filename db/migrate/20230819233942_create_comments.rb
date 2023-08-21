class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.text :comment, null: false
      t.references :author, null: false, foreign_key: { to_table: :users}
      t.references :post, null: false
      t.timestamps
    end
  end
end
