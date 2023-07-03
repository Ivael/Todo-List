import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

type Task = {
  task: string;
};
type TodoProps = {
  task: Task;
};

const Todo: FC<TodoProps> = (props) => {
  const { task } = props;
  return (
    <div className="Todo">
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default Todo;
