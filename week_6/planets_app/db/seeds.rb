# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Planet.delete_all

p1 = Planet.create(name: 'Earth', moons: 1, mass: 5973600, image: "http://static.comicvine.com/uploads/original/14/147508/4524516-earth_day-750x750.jpg")

p2 = Planet.create(name: 'Mars', moons: 16, mass: 367059, image: "http://static.giantbomb.com/uploads/scale_small/0/4866/192066-mars.jpg")

p3 = Planet.create(name: 'Uranus', moons: 4, mass: 76594, image: 'http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/280px-Uranus2.jpg')

p4 = Planet.create(name: 'Pluto', moons: 16, mass: 48372, image: "http://www.kokoromoi.com/images/uploads/pluto_dog.jpg")

p4 = Planet.create(name: 'Jupiter', moons: 3, mass: 56374, image: "http://www.cosmicelk.net/Jupiter.gif")
