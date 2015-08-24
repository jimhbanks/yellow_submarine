# require 'pry'
# class Person
#   #This will create the getter and setter methods for the age attribute
#   attr_accessor :age, :gender
#   #initialize is run when you instantiate a new object
#   def initialize(options={})
#     @age = options[:age]
#     @gender = options[:gender]
#   end
#   #Instance method
#   def speak(words)
#     puts "#{words}, reply: GO HOME"
#   end
# end

# puts person1 = Person.new({age: 43, gender: 'male'})
# binding.pry
# person1.speak("YO")

class Grandma

puts "Hi Phillip Seymour Hoffman, its your Grandmother, how are you?"

response = gets.chomp
  
   if response != response.upcase
     puts "HUH?! I CAN'T HEAR YOU!, ARE YOU HIGH?"
   end

   if response == response.upcase
     puts "NO, NOT SINCE " + (1930+rand(20)).to_s + "!"
   end

    if response == "bye"
      gets "quit"
    end
end
  
response = gets.chomp
