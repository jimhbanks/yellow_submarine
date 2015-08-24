class ReviewsController < ApplicationController

  def new
    @review = Review.new
    @hotel = Hotel.find(params[:hotel_id])
  end

  def create
    hotel = Hotel.find(params[:hotel_id])
    hotel.reviews << Review.create(params[:review].permit(:description, :rating))
    
    redirect_to hotel
  end
end
