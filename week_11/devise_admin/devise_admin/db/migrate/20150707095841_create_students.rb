class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.string :super_power

      t.timestamps null: false
    end
  end
end
