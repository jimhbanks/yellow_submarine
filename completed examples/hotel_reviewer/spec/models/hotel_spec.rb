require 'rails_helper'

describe Hotel do

  let(:ice_hotel) { Hotel.new(name: 'The Ice Hotel',
                              city: 'London',
                              country: 'England') }

  it 'must have a name' do
    hotel = Hotel.new
    expect(hotel.valid?).to eq false
  end

  it 'must have a city' do
    hotel = Hotel.new(name: 'The Ice Hotel')
    expect(hotel.valid?).to eq false
  end

  it 'must have a country' do
    hotel = Hotel.new(name: 'The Ice Hotel',
                      city: 'London')
    expect(hotel.valid?).to eq false
  end

  context 'no ratings' do
    it 'should return a message saying no ratings' do
      expect(ice_hotel.average_rating).to eq 'No ratings yet!'
    end
  end

  context 'one rating' do
    it 'should return the rating' do
      ice_hotel.reviews << Review.new(description: 'great!', rating: 5)

      expect(ice_hotel.average_rating).to eq 5
    end
  end

  context 'multiple ratings' do
    it 'should return the average of all the ratings' do
      ice_hotel.reviews << Review.new(description: 'groovy!', rating: 5)
      ice_hotel.reviews << Review.new(description: 'cool!', rating: 4)
      ice_hotel.reviews << Review.new(description: 'poor!', rating: 2)
      ice_hotel.reviews << Review.new(description: 'shit!', rating: 1)

      expect(ice_hotel.average_rating).to eq 3
    end
  end

end







