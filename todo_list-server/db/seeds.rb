puts "🌱 Seeding spices..."

# Seed your database here

newTask = Task.create(task: 'Complete migration lab')
category = Category.find_or_create_by(category: 'School')
category.tasks << newTask


newTask2 = Task.create(task: 'Complete association lab')
category2 = Category.find_or_create_by(category: 'School')
category2.tasks << newTask2


puts "✅ Done seeding!"
