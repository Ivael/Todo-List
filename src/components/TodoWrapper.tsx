import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "./TodoForm";

type Todo = {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
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

      {todos.map((todo) => (
        <div key={todo.id} style={{ color: "white", fontSize: "2rem" }}>
          {todo.task}
        </div>
      ))}
    </div>
  );
};

export default TodoWrapper;
