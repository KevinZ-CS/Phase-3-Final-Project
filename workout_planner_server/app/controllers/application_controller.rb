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
      exercise = category.exercises
      exercise.to_json
  end


  post '/:id' do

    exercise = Exercise.create(
      exercise: params[:exercise],
      weight: params[:weight],
      sets: params[:sets],
      reps: params[:reps],
      category_id: params[:category_id],
      complete: false
      )
    exercise.to_json

  end

  post '/' do

    category = Category.find_or_create_by(
      category: params[:category]
    )

    category.to_json

  end

  patch '/exercise/:id' do
    exercise = Exercise.find(params[:id])
    exercise.update(complete: params[:complete])
    exercise.to_json

  end

  delete '/exercise/:id' do
    exercise = Exercise.find(params[:id])
    exercise.destroy
    exercise.to_json
  end

  delete '/:id' do
    category = Category.find(params[:id])
    category.destroy
    category.exercises.destroy_all
    category.to_json
  end




end
