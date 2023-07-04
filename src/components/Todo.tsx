import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

export type Task = {
  text: string;
  id: string;
  completed: boolean;
};

type TodoProps = {
  task: Task;
  toggleComplete: (id: string) => void;
};

const Todo: FC<TodoProps> = (props) => {
  const { task, toggleComplete } = props;
  return (
    <div className="Todo">
      {
        <p
          onClick={() => toggleComplete(task.id)}
          className={task.completed ? "completed" : ""}
        >
          {task.text}
        </p>
      }
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default Todo;
