

counter = 0 

while counter > 100
  counter = counter +1
  if counter % 5 == 0 && counter % 3 == 0 
    puts 'fizzbuzz'
  elsif counter % 5 == 0
    puts 'buzz'
  elsif counter % 3 == 0
    puts 'fizz'
  else 
    puts counter
  end
end


