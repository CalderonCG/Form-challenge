import "./ControlBar.scss";

//Types------------
type ControlsType = {
  value: string;
  handleChange: React.Dispatch<
    React.SetStateAction<{
      search: string;
      priority: string;
      status: string;
    }>
  >;
};
function ControlBar({value, handleChange} : ControlsType) {


  return (
    <div className="controls">
      <input type="text" value={value}
      onChange={(e)=>handleChange((prev)=>( {...prev, search: e.target.value}))}
      className="controls_search" placeholder="Search...." />
      <select name="status" 
      onChange={(e)=>handleChange((prev)=>( {...prev, status: e.target.value}))}
      className="controls_select">
        <option value="All">-Status-</option>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
      <select name="priority" className="controls_select"
      onChange={(e)=>handleChange((prev)=>( {...prev, priority: e.target.value}))}>
        <option value="All">-Priority-</option>
        <option value="All">All</option>
        <option value="Urgent">Urgent</option>
        <option value="High">High</option>
        <option value="Normal">Normal</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}

export default ControlBar;
