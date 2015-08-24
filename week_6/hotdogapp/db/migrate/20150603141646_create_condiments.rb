class CreateCondiments < ActiveRecord::Migration
  def change
    create_table :condiments do |t|
      t.string :condiment_id
      t.integer :serving_size
      t.string :hotdog_variety

      t.timestamps null: false
    end
  end
end
