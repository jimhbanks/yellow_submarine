class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :description
      t.integer :rating
      t.belongs_to :hotel, index: true

      t.timestamps null: false
    end
    add_foreign_key :reviews, :hotels
  end
end
