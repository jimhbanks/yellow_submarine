class Hotel < ActiveRecord::Base
  has_many :reviews

  validates :name, presence: true
  validates :city, presence: true
  validates :country, presence: true

  def average_rating
    return 'No ratings yet!' if reviews.none?
    
    # ratings = []
    # self.reviews.each { |review| ratings << review.rating }
    # ratings.sum / ratings.size
    
    self.reviews.map(&:rating).inject(:+) / reviews.size
  end

end
