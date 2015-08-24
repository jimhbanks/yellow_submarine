class MoviesController < ApplicationController
  def home
  end

  def get_model(q)
    url = "http://www.omdbapi.com/?s=#{URI.escape(q)}"
    results = JSON.load(open(url).read)
    results["Search"]
  end

  def result
    @query = params[:q]
    @movies = get_model(@query)
  end

def get_model_movie(t)
  url = "http://www.omdbapi.com/?t=#{URI.escape(t)}&tomatoes=true"
  results = JSON.load(open(url).read)
  results
end

def movie
  @imdb = params[:t]
  @movie = get_model_movie(@imdb)
end
end