class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  # get '/' do
  #   categories = Category.all
  #   categories.to_json(include: :tasks)
  # end

  get '/' do
    categories = Category.all
    categories.to_json
  end

  get '/:id' do
      category = Category.find(params[:id])
      workout = category.workouts
      workout.to_json
  end


  post '/:id' do

    workout = Workout.create(
      exercise: params[:exercise],
      weight: params[:weight],
      sets: params[:sets],
      reps: params[:reps],
      category_id: params[:category_id],
      complete: false
      )
    workout.to_json

  end

  post '/' do

    category = Category.find_or_create_by(
      category: params[:category]
    )

    category.to_json

  end

  patch '/workout/:id' do
    workout = Workout.find(params[:id])
    workout.update(complete: params[:complete])
    workout.to_json

  end

  delete '/workout/:id' do
    workout = Workout.find(params[:id])
    workout.destroy
    workout.to_json
  end

  delete '/:id' do
    category = Category.find(params[:id])
    category.destroy
    category.workouts.destroy_all
    category.to_json
  end




end
