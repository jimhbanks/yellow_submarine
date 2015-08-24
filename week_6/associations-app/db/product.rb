class Profile < ActiveRecord::Base
  has_many :order_products, dependant: :destroy
  has_many :products, through: :order_products
end