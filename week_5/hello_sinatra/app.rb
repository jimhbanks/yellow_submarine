require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry'

get '/' do 
  @page = 'home'
  erb :home 


end

get '/about' do
  @page = 'about'
  erb :about
end

def '/friends/:first/:last/:age' do
  @friends = 'friends'

  @first = params[:first]
  @second

get '/friends/:first/:last/:age' do
  "your friend is called: #{params[:first]} #{params[:last]} and they are #{params[:age]} years old"
end 
