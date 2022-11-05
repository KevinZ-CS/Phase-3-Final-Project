class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :exercise
      t.string :weight
      t.string :sets
      t.string :reps
      t.integer :category_id
      t.timestamps
      t.boolean :complete
    end
  end
end
