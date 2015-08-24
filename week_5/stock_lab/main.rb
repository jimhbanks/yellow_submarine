require 'pry'
require 'sinatra'
require 'sinatra/contrib/all'
require 'yahoofinance'



def get_standard_quotes(symbol)
  YahooFinance::get_standard_quotes(symbol)[symbol] rescue nil
end

get '/' do
  @symbol = params[:symbol]
  @result = get_standard_quotes(@symbol)
  erb :home
end