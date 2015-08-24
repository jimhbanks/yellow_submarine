namespace :scrape do
  desc "Scrapes for listings"
  task get_event_link: :environment do
    puts "getting lisiting"
    page = Nokogiri::HTML(open('http://www.wegottickets.com/searchresults/page/1/all'))
    event = page.css('.event_link').text
    venue = page.css('.venue').text
    price = page.css('.searchResultsPrice').text
    city = page.css('.venuetown').text
  end

end
