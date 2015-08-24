class Customer < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  validates :email, length: {minimum: 3}, uniqueness: true
end