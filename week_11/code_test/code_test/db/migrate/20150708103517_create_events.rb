class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :artist
      t.string :city
      t.string :venue
      t.string :date
      t.integer :price

      t.timestamps null: false
    end
  end
end
