require 'rails_helper'

describe 'Commenting' do
  
  before do
    Post.create(name: 'My First Blog', author: 'Jen Mah', content: 'Lorem ipsum this is my bloggity blog blog.', date: '20150604')
  end

  it 'can add a comment to a post' do
    visit posts_path
    click_link 'Bloggity Blog'
    click_link 'Add comment'

    fill_in 'post_by', with: 'Jen'
    fill_in 'opinion', with: 'Testing comments'

    click_button 'Submit'

    expect(page).to have_content 'Testing comments'
  end

end