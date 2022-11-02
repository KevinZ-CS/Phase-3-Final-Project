class Due_date < ActiveRecord::Base
    has_many :tasks
    has_many :categories, through: :tasks
end