class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :posted_by
      t.text :opinion
      t.belongs_to :post, index: true

      t.timestamps null: false
    end
    add_foreign_key :comments, :posts
  end
end
