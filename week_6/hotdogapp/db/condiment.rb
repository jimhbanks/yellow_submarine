class Condiment < ActiveRecord::Base
  has_many :hotdogs, dependant: :destroy
  has_one :roll
end