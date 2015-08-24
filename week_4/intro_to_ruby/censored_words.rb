# create a 'swear filter' in ruby
  
  # text is inputed 
  # text is accepted
  # text is scanned for highlighted words
  # highlighted words are censored from inputed text with *****
  # edited inputed text is displayed

# naughty_w

def user_input
  print "Say your thang"
  user_comment = get.chomp.downcase
end  

def censor 
  user comment = user_input 
  naughty_words = ['bunnies', 'carrot', 'ham', 'france', 'todger']
  split_comment = user_comment.split
  split_comment.each { |words| words.include?(naughty_words) }
end

censor