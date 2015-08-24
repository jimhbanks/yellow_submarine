class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :teacher
      t.string :phone_number
      t.string :email
      t.string :twitter
      t.string :bio

      t.timestamps null: false
    end
  end
end
