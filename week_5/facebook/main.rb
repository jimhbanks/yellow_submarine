require 'pg'
require 'pry'

db = PG.connect(dbname: 'facebook', host: 'localhost');

begin 
  db.exec( "select * from people" ) do |result|
    result.each do |row| 
      puts "#{row['first']} #{row['last']}"
    end
  end

  print 'what is your full name? '
  name = gets.chomp.split
  print 'what is your DOB? '
  dob = gets.chomp
  print 'what is your relationship status '
  relationship = gets.chomp
  print 'what city are you in? '
  city = gets.chomp

print "#{name} was born on #{dob} and lives in #{city} and is #{relationship}"


sql = "INSERT INTO people (first, last, dob, relationship, city) VALUES ('#{name[0]}', '#{name[1..-1].join(' ')}', '#{dob}', '#{relationship}', '#{city}' );"

  db.exec.(sql)


ensure 
  db.close
end




































































































