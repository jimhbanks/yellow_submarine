class OrderProduct < ActiveRecord::Base
  belongs_to :Order
  belongs_to :Product

end
