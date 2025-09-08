import './TaskCard.scss'
function TaskCard() {
  return (
    <div className="card">
      <p className="card_task">Task name</p>
      <div className="card_details">
        <span className="card_details_priority">Priority</span>
        <p className="card_details_points">N pts</p>
        <p className="card_details_name">Name</p>
        <p className="card_details_date">Date</p>
      </div>
    </div>
  );
}

export default TaskCard;
