class HomeController < ApplicationController

  def home
    puts 'aghhhhhhh'

    @x = 20
    @y = 11
    x/0
  end

end