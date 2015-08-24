require 'pry'

class Robot

  def initialize 
    @counter = 0
  end
  # generate random name for robot using new robot
  def create_name
      prefix = ('A'...'Z').to_a.shuffle[0..1].join('')
      suffix = (100..1000).to_a.sample
      "#{prefix}#{suffix}"
  end

  def name
    @counter += 1
    @name ||= create_name
  end

  def reset
    @counter += 1
    @name = nil 
  end


end

  robots = []
   
  robot1 = Robot.new
  binding.pry
  puts robot1.name
  puts robot1.name
  puts robot1.name

  robot2 = Robot.new
  puts robot2.name
  puts robot2.name
  puts robot2.name

  robots << robot1 << robot2



























