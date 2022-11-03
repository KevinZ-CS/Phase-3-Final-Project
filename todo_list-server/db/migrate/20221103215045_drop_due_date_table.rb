class DropDueDateTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :due_dates
  end
end
