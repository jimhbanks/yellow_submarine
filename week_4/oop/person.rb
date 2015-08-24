
require 'pry'

class Person

  attr_reader :age, :eye_color, :hair_color
  attr_writer :hair_color
  attr_accessor

  def initialize (age, eye_color, hair_color)
    # puts all vars - reads and writes
    @age = age
    @eye_color = eye_color
    @hair_color = hair_color

  end

  def talk(words)
    puts "I say #{words}"
  end  

  def walk(style)
    puts "#{style} is the best way to walk"
  end

  # def age=(value)
  #   @age = value
  # end 

#   def age
#     @age
#   end

#   def eye_color
#     @eye_color
#   end

#   def hair_color
#     @hair_color
#   end

#   def hair_color(value)
#     @hair_color= value
#   end
end

binding.pry

