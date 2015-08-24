class Planet < ActiveRecord::Base
   def index
    @planets = Planet.all
  end
end