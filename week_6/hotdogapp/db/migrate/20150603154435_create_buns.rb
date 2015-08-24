class CreateBuns < ActiveRecord::Migration
  def change
    create_table :buns do |t|

      t.timestamps null: false
    end
  end
end
