class HotelsController < ApplicationController

  def index
    @hotels = Hotel.all
  end

  def new
    @hotel = Hotel.new
  end

  def create
    hotel = Hotel.new params[:hotel].permit(:name, :city, :country)

    if hotel.save
      redirect_to hotels_path
    else
      render 'new'
    end
  end

  def show
    @hotel = Hotel.find(params[:id])
  end

end
