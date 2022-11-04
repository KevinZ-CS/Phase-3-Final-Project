class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get '/categories' do
    categories = Category.all
    categories.to_json(include: :tasks)
  end


  post '/tasks' do

    task = Task.create(
      task: params[:task],
      category_id: params[:category_id],
      complete: false
      )
    task.to_json

  end

  post '/category' do

    category = Category.find_or_create_by(
      category: params[:category]
    )

    category.to_json

  end

  patch '/tasks/:id' do
    task = Task.find(params[:id])
    task.update(complete: params[:complete])
    task.to_json

  end

  delete '/tasks/:id' do
    task = Task.find(params[:id])
    task.destroy
    task.to_json
  end

  delete '/categories/:id' do
    category = Category.find(params[:id])
    category.destroy
    category.to_json
  end




end
