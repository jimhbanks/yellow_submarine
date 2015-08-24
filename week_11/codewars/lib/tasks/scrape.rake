require 'open-uri'

namespace :scrape do
  desc "Scrapes for user scores from codewars"
  task get_user_scores: :environment do
    puts 'Getting scores........'
    User.all.each do |user|
      begin
        page = Nokogiri::HTML(open("http://www.codewars.com/users/#{user.name}"))
      score = page.css('.honor').text.scan(/\d+/).shift.to_i
      user.update_attribures(score: score)
    rescue Exception => e
      puts "oh shit you are a dickhead #{user.name}"    
    end
  end
  puts 'DONE'
end
end
