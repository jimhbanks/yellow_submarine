class Hotdog< ActiveRecord::Base
  has_many :varieties
  has_one :roll
end