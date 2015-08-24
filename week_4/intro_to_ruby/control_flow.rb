if true 
  puts 'HELLO!'
else
  puts "BYE!"
end
proper syntax

puts 'HELLOO!' if true

if true then puts "HELLOOOOO!" else puts "BYE!" end
easy to read, but bad

if true; puts 'hellloo!'; else; puts 'bye!'; end
ugly syntax

print 'enter your number:'
number = gets.to_i
if number > 0
  puts 'you entered  positive number!'
elsif number < 0 
  puts 'you entered a negative number!'
elsif number == 69
  puts 'you datty basterd'
else
  put 'you entered 0!'
# end

print 'enter a number: '
number = get.to_i
unless number > 10
  puts 'change your number, its too small'
else number 
  put 'LARGE NUMBERRERERERERERERE'
end

user_reg = false
puts 'please sign up to continue' unless user_reg
puts 'please sign up'
end

puts 'exit the programme? (yes/no)'
answer = gets.chomp.downcase

case answer 
  when 'yes'
    puts 'goodbye!'
  when 'no'
    puts 'ok, continue'
  else 
    puts 'Not sure what you mean tonto.....'
end
    puts 'continue with the programme'

number = 1
while number < 11 
  puts number 
  number = number + 1
end
puts 'done' 

number = 1 
until number > 10
  puts number
  number = number + 1
end

puts 'done'

for i in 1...11
  puts i
end

for i in 1...11
 break if i > 5
  puts i
end

for i in 1...11
 break if i > 5
  puts 'the number you wanted is ' + i + '. how cool'
  puts "the number you wanted is #{i}. how cool"
end


print 'what is half of 12?'
answer = gets.to_i

while answer != 12 / 2
  print 'nope, try again'
  answer  = gets.to_i
  end
puts 'Correct'




    






























