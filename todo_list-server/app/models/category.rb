class Category < ActiveRecord::Base
    has_many: tasks
    has_many :due_dates, through: :tasks
end