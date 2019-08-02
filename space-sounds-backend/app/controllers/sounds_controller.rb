class SoundsController < ApplicationController

  def index
    sounds = Sound.all
    render json: sounds
  end

  def show
    sound = Sound.find_by(id: params[:id])
    render json: sound
  end

end
