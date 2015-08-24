require 'pry'


require_relative 'animals'
# require_relative 'clients'
# require_relative 'shelter'

animal1 = Animal.new name: "fluffles", breed: "Dog", gender: "male",toy: "squeaky duck"
animal2 = Animal.new name: "Cutey Booty", breed: "Cat", toy: "Cat nip"
animal3 = Animal.new name: "fluffles", breed: "Dog", toy: "squeaky duck"



def menu
  puts 'WELCOME TO THE HAPPITAILS ANIMAL SHELTER MANAGEMENT APP'
  puts '-' * 80
  puts " (A) Animal Menu \n (I) Inventory/Database \n (C) Client Database \n (S) Staff Management \n (q) Quit"
  puts '-' * 80
  gets.chomp 
end

response = menu

while response !="Q"

case response
  when ""

 case response
  when "A"
    puts "Whats the lil critters name? \n"
    name = gets.chomp
    puts "What breed is it? \n"
    breed = gets.chomp
    puts "How old is it? \n"
    age = gets.chomp.to_i
    puts "Whats its favourite toy? \n"
    toy = gets.chomp
    puts "What gender is it? \n"
    gender = gets.chomp
    puts "Can they be homed with children (y) (n)? \n"
    child_ok = (gets.chomp = 'y')
    animal = Animal.new name: name, breed: breed, age: age, toy: toy, child_ok: child_ok

    shelter << animal
  end

case response
  when "C"
    puts "What is the new clients name? \n"
    name = gets.chomp
    puts ""

  end

    puts '-' * 80
    puts "Press enter to continue"
    gets
    response = menu

  end
end
menu