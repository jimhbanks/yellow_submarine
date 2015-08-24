require 'rails_helper'

describe 'adding a post' do

  it 'a user can add a blog post to the site' do
    visit '/'
    click_link 'add a blog post'
    fill_in 'title', with: 'Bloggity Blog'
    fill_in 'author', with: 'Davey Jones'
    fill_in 'content', with: 'This is a test'
    fill_in 'date', with: '20150604'
    click_button 'Submit'

    expect(page).to have_content 'Bloggity Blog'

  end

end