//Business Logic for Todo List
function TodoList() {
  this.todos = [],
  this.currentId = 0
}

TodoList.prototype.addTodo = function(todo) {
  this.todos = [];
  this.todos.push(todo);
}

TodoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

TodoList.prototype.findTodo = function(id) {
  for (var i=0; i< this.todos.length; i++) {
    if (this.todos[i]) {
      if (this.todos[i].id == id) {
        return this.todos[i];
      }
    }
  };
  return false;
}

TodoList.prototype.deleteTodo = function(id) {
  for (var i=0; i< this.todos.length; i++) {
    if (this.todos[i]) {
      if (this.todos[i].id == id) {
        delete this.todos[i];
        return true;
      }
    }
  };
  return false;
}

//Business Logic for Todos
function Todo(task, dueDate, priority) {
  this.task = task,
  this.dueDate = dueDate,
  this.priority = priority
  this.complete = false
}

Todo.prototype.todoInfo = function() {
  return this.task + ": due " + this.dueDate + ", priority: " + this.priority;
}
Todo.prototype.updateTask = function(task) {
  this.task = task;
}
Todo.prototype.updateDueDate = function(dueDate) {
  this.dueDate = dueDate;
}
Todo.prototype.updatePriority = function(priority) {
  this.priority = priority;
}
Todo.prototype.updateComplete = function() {
  this.complete = !this.complete;
}

var todoList = new TodoList();
// User input logic
$(document).ready(function() {
  $("#new-todo-form").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("#new-task").val();
    var inputtedDueDate =$("#new-due-date").val();
    var inputtedPriority =$("#new-priority").val();
    var todo = new Todo(inputtedTask, inputtedDueDate, inputtedPriority);
    todoList.addTodo(todo);
    for (i = 0; i < todoList.todos.length; i++) {
      $("#results").append("<li>" + todoList.todos[i].task + "</li>");
    }
  });
});
