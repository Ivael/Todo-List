import { FC, useState } from "react";
import { Task } from "./Todo";
import { v4 as uuid } from "uuid";

interface TodoFormProps {
  onAddTodo: (Value: Task) => void;
}
const TodoForm: FC<TodoFormProps> = (props) => {
  const { onAddTodo } = props;
  const [value, setValue] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newTask: Task = {
      id: uuid(),
      text: value,
      completed: false,
    };

    onAddTodo(newTask);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
