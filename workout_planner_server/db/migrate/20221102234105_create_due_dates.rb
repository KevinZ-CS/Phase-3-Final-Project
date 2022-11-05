class CreateDueDates < ActiveRecord::Migration[6.1]
  def change
    create_table :due_dates do |t|
      t.string :due_date
    end
  end
end
