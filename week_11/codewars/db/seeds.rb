# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

%w(annegans rhenry1989 tvc25 BFriz jenmah abcdave88 jimhbanks notthemessiah63 murrayrj annagee hainesy91 DaisyMolving pataruco gperrin01 nickstoneman erikajon zhan-w AlexAscherson karannakai albertobebz laura-wal).each do |user|
  User.create(name: user)
end

puts "users seeded"