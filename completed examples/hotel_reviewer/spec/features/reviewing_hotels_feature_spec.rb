require 'rails_helper'

describe 'Reviewing' do

  before do
    Hotel.create(name: 'The Savoy', city: 'London', country: 'England')
  end

  it 'can add a review to a hotel' do
    visit hotels_path
    click_link 'The Savoy'
    click_link 'Add review'

    fill_in 'Description', with: 'Loved it!'
    select 5, from: 'Rating'

    click_button 'Submit'

    expect(page).to have_content 'Loved it!'
  end
  
end