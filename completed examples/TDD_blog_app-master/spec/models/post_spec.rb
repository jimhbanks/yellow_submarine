require 'rails_helper'

describe Post do

  let(:new_post) { Post.new(title: 'My First Blog',
                            author: 'London',
                            content: 'Lorem ipsum this is my bloggity blog blog.',
                            date: '20150604') }

  it 'must have a title' do
    post = Post.new
    expect(post.valid?).to eq false
  end

  it 'must have an author' do
    post = Post.new(title: 'My First Blog')
    expect(post.valid?).to eq false
  end

  it 'must have content' do
    post = Post.new(title: 'My First Blog', author: 'Jen Mah')
    expect(post.valid?).to eq false
  end

  it 'must have a date' do
    post = Post.new(title: 'My First Blog', author: 'Jen Mah', content: 'Lorem ipsum this is my bloggity blog blog.')
    expect(post.valid?).to eq false
  end

  context 'no comments' do
    it 'should return a message saying no comments yet' do
      expect(new_post.show_comments).to eq 'No comments'
    end
  end

  # context 'one comment' do
  #   it 'should return the comment' do
  #     new_post.comments << Comment.new(posted_by: 'Dave', opinion: 'This is my opinion')
  #     expect(new_post.show_comments).to eq new_post.comments.first
  #   end
  # end

  context 'multiple comments' do
    it 'should return all of the comments' do
      new_post.comments << Comment.new(posted_by: 'Jen', opinion: 'This is another opinion!')
      new_post.comments << Comment.new(posted_by: 'Thalia', opinion: 'Boom')
      new_post.comments << Comment.new(posted_by: 'Dave', opinion: 'I can not believe it is not butter')

      expect(new_post.show_comments).to eq new_post.comments.all
    end
  end

end
