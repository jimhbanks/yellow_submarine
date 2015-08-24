# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Order.delete_all
Product.delete_all
OrderProduct.delete_all
Customer.delete_all

c1 = Customer.create(name: 'Linda Lovelace')
c2 = Customer.create(name: 'Brandy Love')
c3 = Customer.create(name: 'John Steel')

o3 = Order.create(order_reference: 'sdsf4jfgd', amount: 700)
o3.customer_id = c1.id
o3.save

#Assign products to orders - creating order_product objects and saving them to the database.
o1.order_products.create(product_id: p1.id)
o1.order_products.create(product_id: p3.id)
o3.order_products.create(product_id: p4.id)
p1.order_products.create(order_id: o3.id)

pr1 = Profile.create(twitter_handle: 'Jim', email: 'jim@jim.com') 
pr1.customer_id = c1.id
pr1.save

pr2 Profile.create(twitter_handle: 'bob', email: 'hi@hi.com', customer_id: c2.id)

