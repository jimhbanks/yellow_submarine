class Animal

 # attr_accessor :name, :breed, :gender, :age, :toy, :child_ok

# getters and setters
 def name
   @name
 end
 def name=(value)
   @name = value
 end

 def initialize(options = {})
    @name = options[:name]
    @breed = options[:breed]
    @gender = options[:gender]
    @toy = options[:toy]
    @child_ok = options[:child_ok]
 end

 def to_s
    "#{name} is a #{breed} is a #{gender}, their favourite toy is a #{toy}.  They are #{age} years young"
  end
