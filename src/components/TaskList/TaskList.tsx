import clsx from "clsx";
import type { ActionType, TaskType } from "../../Utils/TaskTypes";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskList.scss";

//Types---------------------
type ListProps = {
  list: TaskType[];
  isDisplayed: boolean;
  handleToggle: React.ActionDispatch<[action: ActionType]>;
};
function TaskList({ list, isDisplayed, handleToggle }: ListProps) {
  return (
    <div className={clsx("list",
      {
        display: isDisplayed
      }
    )}>
      {list.map((task) => (
        <TaskCard key={task.id} task={task} handleToggle={handleToggle} />
      ))}
    </div>
  );
}

export default TaskList;
