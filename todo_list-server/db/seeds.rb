puts "🌱 Seeding spices..."

# Seed your database here

newTask = Task.create(task: 'Complete migration lab')
category = Category.find_or_create_by(category: 'School')
category.tasks << newTask
due_date = Due_date.find_or_create_by(due_date: '2022-11-02')
due_date.tasks << newTask
newTask.update(task: "#{newTask.category.category}: Complete migration lab")

newTask2 = Task.create(task: 'Complete association lab')
category2 = Category.find_or_create_by(category: 'School')
category2.tasks << newTask2
due_date2 = Due_date.find_or_create_by(due_date: '2022-11-02')
due_date2.tasks << newTask2
newTask2.update(task: "#{newTask2.category.category}: Complete association lab")

puts "✅ Done seeding!"
