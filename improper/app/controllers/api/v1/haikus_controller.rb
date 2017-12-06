class Api::V1::HaikusController < ApplicationController
 before_action :set_haiku, only: [:show, :update, :destroy]

   def index
     render json: Haiku.all
   end

   def create
    haiku = Haiku.new(haiku_params)
    if haiku.save
    render json: haiku
    else
      render json: { message: @haiku.errors }, status: 400
    end
  end

  def show
    render json: @haiku
  end

  def update
    if @haiku.update(haiku_params)
      render json: @haiku
    else
      render json: { message: @haiku.errors }, status: 400
    end
  end

  def destroy
    if @haiku.destroy
      render status: 404
    else
      render json: { message: "haikus are forever " }, status: 400
    end
  end

  private

  def set_haiku
    @haiku = Haiku.find_by(id: params[:id])
  end

  def haiku_params
    params.permit(:alias, :noun_one, :noun_two, :noun_three, :noun_four, :noun_five)
  end

  end
