import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import type { ActionType, TaskType } from "../../Utils/TaskTypes";
import "./TaskCard.scss";
import clsx from "clsx";

//Tyoes
type CardProps = {
  task: TaskType;
  handleToggle: React.ActionDispatch<[action: ActionType]>;
};

function TaskCard({ task, handleToggle }: CardProps) {
  return (
    <div className="card">
      <div className="card_data">
        <p className={clsx("card_task", { completed: task.completed })}>
          {task.name}
        </p>
        <div className="card_details">
          <div className="card_details_section">
            <p className="card_details_name" title={task.assignee}>
              {task.assignee.slice(0, 5)}
              {task.assignee.length > 5 ? "..." : ""}
            </p>
            <p className={clsx("card_details_priority",
              {
                urgent: task.priority === 'Urgent',
                high: task.priority === 'High',
                normal: task.priority === 'Normal',
                low: task.priority === 'Low'
              }
            )}>{task.priority}</p>
          </div>
          <div className="card_details_section">
            <p className="card_details_points">{task.points} pts</p>
            <p className="card_details_date">{task.date}</p>
          </div>
        </div>
      </div>
      {task.completed ? (
        <IoIosRadioButtonOn
          className="card_toggle"
          onClick={() => handleToggle({ type: "toggle", value: task.id })}
        />
      ) : (
        <IoIosRadioButtonOff
          className="card_toggle"
          onClick={() => handleToggle({ type: "toggle", value: task.id })}
        />
      )}
    </div>
  );
}

export default TaskCard;
