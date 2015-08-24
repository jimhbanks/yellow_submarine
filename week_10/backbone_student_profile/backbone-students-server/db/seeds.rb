# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Student.delete_all

student1 = Student.create!(name: 'Mathilda Thopmson', twitter: '@mathilda,', bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', phone_number: '07540264843', email: 'mathilda@mathilda.com')

student2 = Student.create!(name: 'Lauren Spencer', twitter: '@lauren,', bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', phone_number: '02072494837', email: 'lauren@lauren.com')

student3 = Student.create!(name: 'James Bennet', twitter: '@james,', bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', phone_number: '07503957395', email: 'james@james.com')

student4 = Student.create!(name: 'Jeremey Marar', twitter: '@jezza69,', bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', phone_number: '0495068473', email: 'jezza@jezza.com')
