require 'sinatra'
require 'sinatra/contrib/all'
require 'pg'
require 'pry'

get '/' do
  erb :index
end

get '/items' do
  sql = "SELECT * FROM items"
  @items = run_sql(sql)
# checks if this is a ajax request
  if request.xhr?
#  convert the pg object into an array convert the array to json to send back as a response 
    json @items.to_a
  else
    erb :index
  end
end

post '/items' do
  item = params [:item]
  swl = "insert into items (item, done) values ('#{item}, 'false') returning *"
  @item = run_sql(sql).first
  if request.xhr?
    json @item
  else
    redirect_to '/items'
  end
end

put '/items/:id' do
  sql = "update item set done='#{params[:done]}' where id=#{params[:id]}"
  run_sql(sql)
  if request.xhr?
    json [{status: :ok}]
  else
    redirect_to '/items/'
  end
end


private

def run_sql(sql)
  conn = PG.connect(dbname: 'todo', host: 'localhost')
  begin
    result = conn.exec(sql)
  ensure
    conn.close
  end
  result
end
