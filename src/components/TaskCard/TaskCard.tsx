import type { TaskType } from '../../Utils/TaskTypes';
import './TaskCard.scss'

//Tyoes
type CardProps={
  task: TaskType
}

function TaskCard({task}:CardProps) {
  return (
    <div className="card">
      <p className="card_task">{task.name}</p>
      <div className="card_details">
        <span className="card_details_priority">{task.priority}</span>
        <p className="card_details_points">{task.points} pts</p>
        <p className="card_details_name">{task.assignee}</p>
        <p className="card_details_date">{task.date}</p>
      </div>
    </div>
  );
}

export default TaskCard;
