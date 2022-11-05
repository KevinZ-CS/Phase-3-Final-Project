puts "🌱 Seeding spices..."



newWorkout = Workout.create(exercise: 'Bench Press', weight: '135lbs', sets: '5', reps: '10'  )
category = Category.find_or_create_by(category: 'Chest')
category.tasks << newWorkout

newWorkout2 = Workout.create(exercise: 'Squat', weight: '185lbs', sets: '5', reps: '5'  )
category2 = Category.find_or_create_by(category: 'Legs')
category2.tasks << newWorkout2


# newTask2 = Workout.create(task: 'Complete association lab')
# category2 = Category.find_or_create_by(category: 'School')
# category2.tasks << newTask2



puts "✅ Done seeding!"
