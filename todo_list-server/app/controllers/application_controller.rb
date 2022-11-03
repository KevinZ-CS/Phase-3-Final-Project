class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/tasks" do
    tasks = Task.all
    tasks.to_json
  end

  post '/tasks' do

    task = Task.create(
      task: "#{params[:category]}: #{params[:task]} due #{params[:due_date]}"
      complete: false
      )
    category = Category.find_or_create_by(
      category: params[:category]
    )

    due_date = Due_date.find_or_create_by(
      due_date: params[:due_date]
      )

    category.tasks << task
    due_date.tasks << task

    task.to_json

  end

  delete '/tasks/:id' do
    task = Task.find(params[:id])
    task.destroy
    task.to_json
  end

end
