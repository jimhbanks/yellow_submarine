require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry'

get '/' do 
  @page = 'home'
  erb :home 
end

# get '/friends' do
#   @friends = 'friends'
#   @first = 'Jim'
#   @last = 'Banks'
#   @age = '30'
#   erb :friends
# end 

get '/friends/:first/:last/:age' do
  "your friend is called: #{params[:first]} #{params[:last]} and they are #{params[:age]} years old"
end 
