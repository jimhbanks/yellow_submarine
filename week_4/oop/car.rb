
require 'pry'

class car

  def initialize ()
    @make = make
    @side_of_drive = side_of_drive
    @color = color
  end
  
  def condition(condition_desc)
      puts "Describe this cars condition #{condition_desc}"

  end

  def make
    @make
  end

  def side_of_drive
    @side_of_drive
  end

  def color
    @color
  end

end

binding.pry