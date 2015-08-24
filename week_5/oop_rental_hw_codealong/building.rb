class Building

  attr_accessor :apartments

  def initialize(options = {})
    @floors = options[:floors]
    @address = options[:address]
    @num_of_apartments = options[:num_of_apartments]
    @age = options[:age]
    @concierge = options[:concierge]
    @apartments = options[:apartments] || []
  end

# instance method
  def availible_apartments
    @apartments.select do |apartment| 
      apartment.tenants.length < apartment.bedrooms
  end
end
end
