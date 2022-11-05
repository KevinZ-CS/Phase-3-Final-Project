class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :task
      t.integer :category_id
      t.integer :due_date_id
      t.timestamps
    end
  end
end
