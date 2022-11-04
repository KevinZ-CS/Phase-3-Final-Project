class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get '/' do
    categories = Category.all
    categories.to_json(include: :tasks)
  end

  get '/:id' do
      category = Category.find(params[:id])
      tasks = category.tasks
      tasks.to_json
  end


  post '/:id' do

    task = Task.create(
      task: params[:task],
      category_id: params[:category_id],
      complete: false
      )
    task.to_json

  end

  post '/' do

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

  delete '/:id' do
    category = Category.find(params[:id])
    category.destroy
    category.tasks.destroy_all
    category.to_json
  end




end
