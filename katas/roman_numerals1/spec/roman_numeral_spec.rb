require_relative

describe RomanNumeral do

  it 'it converts the number 1 to the numeral I' do
    roman = RomanNumeral.new

    expect(roman.covert(1)). to eq 'I'
  end

end