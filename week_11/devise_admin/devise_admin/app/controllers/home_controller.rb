class HomeController < ApplicationController

  def index

    if current_user 
      redirect_to students_path
    end
  end

end
