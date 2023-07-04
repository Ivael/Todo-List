import { FC, useState } from "react";
import { Task } from "./Todo";
import { v4 as uuid } from "uuid";

interface EditTodoFormProps {
  editTodo: (Value: Task, id: Task) => void;
}
const EditTodoForm: FC<EditTodoFormProps> = (props) => {
  const { editTodo } = props;
  const [value, setValue] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newTask: Task = {
      id: uuid(),
      text: value,
      completed: false,
    };

    editTodo(newTask);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update task
      </button>
    </form>
  );
};

export default EditTodoForm;
