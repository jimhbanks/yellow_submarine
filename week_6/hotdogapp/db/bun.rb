class Bun < ActiveRecord::Base
  has_many :hotdogs, dependant: :destroy
  has_many :condiments
end