import { FC, useState } from "react";
interface TodoFormProps {
  onAddTodo: (Value: string) => void;
}
const TodoForm: FC<TodoFormProps> = (props) => {
  const { onAddTodo } = props;
  const [value, setValue] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onAddTodo(value);
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
