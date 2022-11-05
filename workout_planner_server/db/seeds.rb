puts "🌱 Seeding spices..."

# Seed your database here
# newTask3 = Task.find(1)
# newTask3.destroy

# newTask4 = Task.find(2)
# newTask4.destroy

newTask = Task.create(task: 'Complete migration lab')
category = Category.find_or_create_by(category: 'School')
category.tasks << newTask


newTask2 = Task.create(task: 'Complete association lab')
category2 = Category.find_or_create_by(category: 'School')
category2.tasks << newTask2



puts "✅ Done seeding!"
