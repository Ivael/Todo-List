import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "./TodoForm";
import Todo, { Task } from "./Todo";
import EditTodoForm from "./EditTodoForm";

type Todo = {
  id: string;
  task: Task;
  completed: boolean;
  isEditing: boolean;
};

const TodoWrapper = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (task: Task) => {
    const newTodo: Todo = {
      id: uuid(),
      task,
      completed: false,
      isEditing: false,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: any) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <TodoForm onAddTodo={onAddTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm />
        ) : (
          <Todo
            task={todo.task}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
