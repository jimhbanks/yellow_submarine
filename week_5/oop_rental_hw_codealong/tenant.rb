class Tenant

  attr_accessor :name 

  def initialize(options = {})
    @name = options[:name]
    @age = options[:age]
    @sex = options[:sex]
    @apartment = options[:apartment] || nil
  end

end