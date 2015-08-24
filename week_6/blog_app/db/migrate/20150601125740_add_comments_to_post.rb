class AddCommentsToPost < ActiveRecord::Migration
  def change
    add_reference :posts, :comments, index: true
    add_foreign_key :posts, :comments
  end
end
