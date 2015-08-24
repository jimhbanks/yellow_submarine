class Customer < ActiveRecord::Base
  has_many :orders, dependant: :destroy
  has_one :profile
end
