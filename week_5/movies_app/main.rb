require 'sinatra'
require 'sinatra/contrib/all'
require 'pg'
require 'pry'
require 'httparty'
require 'json'

before do
  @db = PG.connect(dbname: 'movies_app', host: 'localhost')
end

after do
  @db.close
end

get '/' do
  title = params[:title]
  if title 
    url_title = params[:title].gsub(' ', '+')
    url = "http://www.omdbapi.com/?t=#{url_title}"
    @result = HTTParty.get(url)
   sql = "INSERT INTO movies (title, year, rated, released, runtime, genre, director, 
    writers, actors, plot, poster) VALUES (#{sql_string(@result['Title'])}, '#{@result['Year']}',  
    '#{@result['Rated']}', '#{@result['Released']}', '#{@result['Runtime']}', '#{@result['Genre']}', 
    '#{@result['Director']}', '#{@result['Writer']}', '#{@result['Actors']}', #{sql_string(@result['Plot'])}, 
    '#{@result['Poster']}')"
    # Execute the sql command on the database
  @db.exec(sql)

  end
  erb :movie
end

get '/movies' do
  sql = "SELECT * FROM MOVIES"

  @movies = @db.exec(sql)
# make a qry to the db to get all the movies
# store them in a instance var
# loop through the array of movies in the movies.erb
# create a nav with links to differnet pages
# styling
  erb :movies
end

def sql_string(value)
  "'#{value.gsub("'", "''")}'"
end
