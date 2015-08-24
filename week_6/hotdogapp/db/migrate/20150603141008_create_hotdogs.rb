class CreateHotdogs < ActiveRecord::Migration
  def change
    create_table :hotdogs do |t|
      t.string :variety

      t.timestamps null: false
    end
  end
end
