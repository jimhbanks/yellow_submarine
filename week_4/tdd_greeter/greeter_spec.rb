require_relative "../greeter"

describe "Greeter" do

  it "Greets Jim" do
  expect(greet('Jim')).to eq "Hello Jim, How are you?"
  end

  it "Greets James" do
  expect(greet("James")).to eg "Hello James, How are you?"
  end
end

