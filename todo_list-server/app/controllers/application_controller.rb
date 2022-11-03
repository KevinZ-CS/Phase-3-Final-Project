class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/tasks" do
    tasks = Task.all
    tasks.to_json
  end

  delete '/tasks/:id' do
    task = Task.find(params[:id])
    task.destroy
    task.to_json
  end

end
