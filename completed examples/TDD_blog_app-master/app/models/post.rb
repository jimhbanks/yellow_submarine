class Post < ActiveRecord::Base
  has_many :comments

  validates :title, presence: true
  validates :author, presence: true
  validates :content, presence: true
  validates :date, presence: true

  def show_comments
    return 'No comment submitted' if comments.none?
    self.comments.all    
      
  end

end
