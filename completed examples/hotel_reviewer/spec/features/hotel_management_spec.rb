require 'rails_helper'

describe 'adding a hotel' do

  it 'a user can add a hotel to the site' do
    visit '/'
    click_link 'Add a hotel'
    fill_in 'Name', with: 'The Ace Hotel'
    fill_in 'City', with: 'London'
    fill_in 'Country', with: 'England'
    click_button 'Submit'

    expect(page).to have_content 'The Ace Hotel'
  end
end