class AddCustomerIdToProfile < ActiveRecord::Migration
  def change
    add_column :profiles, :customer_id, :integer
  end
end
