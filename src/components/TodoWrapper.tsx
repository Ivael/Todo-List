import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

type Todo = {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
};

type task = {
  task: string;
};

const TodoWrapper = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (task: string) => {
    const newTodo: Todo = {
      id: uuid(),
      task,
      completed: false,
      isEditing: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className="TodoWrapper">
      <TodoForm onAddTodo={onAddTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
    </div>
  );
};

export default TodoWrapper;
