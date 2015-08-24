
require 'pry'

class car

  attr_reader :make, :side_of_drive
  attr_accessor :condition_desc, :price



  def initialize (make, side_of_drive, color, condition_desc)
    @make = make
    @side_of_drive = side_of_drive
    @color = color
  end
  
  def condition_desc(condition_desc)
      puts "This cars condition is #{condition_desc}"

  end

  def make(make_of_car)
    @make_of_car
  end

  def side_of_drive
    @side_of_drive
  end

  def color
    @color
  end

  def price(price)
    puts "This car costs #{price}"
  end


end

binding.pry