require 'pry'

class Grandma
  attr_reader
  def speak(words)
    if words == "BYE"
      @count += 1
    elsif words == words.upcase
      @count = 0
      puts "na, not since 19#{rand(30..50)}"
    else
      @count = 0
      puts "speka up!"
  end
 end
end

puts grandma = Grandma.new
while grandman.count < 3
puts "speak to grandma"
grandma.speak(gets.chomp)