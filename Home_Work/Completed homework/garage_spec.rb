
require_relative '../lib/garage'

describe Garage do

  let(:bike) { Bike.new }
  let(:garage) { Garage.new(:capacity => 20) }

  def fill_garage(garage)
    20.times { garage.accept_bike(Bike.new) }
  end

  it 'garage should be able to accept a bike from van' do
    bike = Bike.new
    garage = Garage.new

    expect(garage.bike_count).to eq 0
    garage.accept_bike(bike)
    expect(garage.bike_count).to eq 1
  end

  it 'garage should be able to reload a bike to van' do
    garage.accept_bike(bike)
    garage.reload(bike)
    expect(garage.bike_count).to eq 0
  end

  it 'garage should know when it is full' do
    expect(garage.full?).not_to be true
    fill_garage garage
    expect(garage.full?).to be true
  end

  it 'garage should not accept a bike if it is full' do
    fill_garage garage
    expect { garage.accept_bike(bike) }.to raise_error RuntimeError
  end

  it 'garage should be able to fix bikes' do
    bike.break
    bike.fix
    expect(bike.broken?). to be false
  end

end