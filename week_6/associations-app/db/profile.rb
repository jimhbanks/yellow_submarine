class Profile < ActiveRecord::Base
  belongs_to :customer
  has_many :order_products, dependant: :destroy
  has_many :products, through: :order_products
end