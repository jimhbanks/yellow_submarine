class Garage

  DEFAULT_CAPACITY = 10

  def initialize(options = {})
    @capacity = options.fetch(:capacity, DEFAULT_CAPACITY)
    @bikes = []
    @broken = false
  end

  def broken?
    @broken
  end

  def fix
    @broken = false
  end
  
  def bike_count
    @bikes.count
  end

  def accept_bike(bike)
    raise "Van is now full" if full?
    @bikes << bike
  end

  def reload(bike)
    @bikes.delete(bike)
  end

  def full?
    bike_count == @capacity
  end

end