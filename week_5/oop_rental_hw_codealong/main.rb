require 'pry'

require_relative 'building'
require_relative 'apartment'
require_relative 'tenant'

building_one = Building.new floors: 5, address: 'WDI Heights, 1 GA Road, GAVille', num_of_apartments: 15, age: 100, concierge: true

tenants = []

a1 = Apartment.new price: 3000, occupied: false, balcony: true, sqft: 2700, bedrooms: 3, bathrooms: 2
a2 = Apartment.new price: 1900, occupied: false, balcony: false, sqft: 1250, bedrooms: 1, bathrooms: 1
a3 = Apartment.new price: 1250, occupied: false, balcony: false, sqft: 1900, bedrooms: 2, bathrooms: 1

[a1, a2, a3].each { |apartment| building_one.apartments << apartment }

t1 = Tenant.new name: 'Barry Grape', age: 19, sex: :male
t2 = Tenant.new name: 'Andy Goldthwaite', age: 28, sex: :male
t3 = Tenant.new name: 'Carmen Vallpolicella', age: 63, sex: :female
t4 = Tenant.new name: 'Eleanor Cartwright', age: 95, sex: :female
t5 = Tenant.new name: 'Stelios Konstanopoulos', age: 47, sex: :male

a1.tenants << t1 << t4
a2.tenants << t2
a3.tenants << t3 << t5

building_tenants = []

building_income = [=]

homeless_tenants = []
# homeless_tenants << t3 << t5

def menu
  puts 'clear'
  puts '-' * 80
  puts " (ap) Create new apartment \n (t) Register a new tenant \n (a) Add new tenant to apartment \n (l) List tenants in the building \n (i) Income for building \n (e) Evict all tenants \n (d) Display number or occupied and vacant apaartments \n (q) Quit"
  puts '-' * 80
  gets.chomp 
end

response = menu

while response !='q'
  case response
  when 'ap'
    puts "What is the price pcm? \n"
    price = gets.chomp.to_i
    puts "Is the apartment currently occupied (y) (n)? \n"
    occupied = (gets.chomp == 'y')
    puts "Does it have a balcony (y) (n)? \n"
    balcony = (gets.chomp == 'y')
    puts "How many bedrooms does apartment have? \n"
    bedrooms = gets.chomp.to_i
    puts "How many bathrooms does apartment have? \n"
    bathrooms = gets.chomp.to_i
    apartment = Apartment.new price: price, occupied: occupied, balcony: balcony, bedrooms: bedrooms, bathrooms: bathrooms

    building_one << apartment

  # when 't'
  #   puts "What is the new tenants name? \n"
  #   name = gets.chomp
  #   puts "What is the tenants age? \n"
  #   age = gets.chomp.to_i
  #   puts "What is the new tenants gender? \n"
  #   sex = gets.chomp

  #   tenant = Tenant.new name: name, age: age, sex: sex
  #   homeless_tenants << tenant

  # when 'a'
  #   puts "Select a tenant: \n"
  #     homeless_tenants.each_with_index do |tenant, index| 
  #     puts "#{index} #{tenant.name} \n"
  #   end
  #         # tenants object to add to apartment
  #   tenant_to_add =  homeless_tenants.delete_at(gets.chomp.to_i)
  #         # instance method t return all apartments with availibilty
  #   apartments = building_one.availible_apartments
  #   apartments.each_with_index do |apartment, index|
  #     puts "#{index} costs: #{apartment.price} \n"
  #   end
  # apartment_index = gets.chomp.to_i

  # building_one.apartments[apartment_index].tenants << tenant_to_add
  
  # when 'l'
  #   puts "list of tenants goes here \n"     
  #    building_one.apartments.each do |apartment|
  #    apartment.tenants
  #    binding.pry
  #    end   

  # when 'i'
  #   puts "Income of building goes here \n"


  #   apartment.price.get

        
      
  # end
end
  puts '-' * 80
  puts "Press enter to continue"
  gets
  response = menu
# end






