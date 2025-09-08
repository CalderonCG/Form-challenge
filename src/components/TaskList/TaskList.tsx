import TaskCard from '../TaskCard/TaskCard'
import './TaskList.scss'

function TaskList() {
  return (
    <div className='list'>
        <h1>Task List</h1>
        <TaskCard/>
    </div>
  )
}

export default TaskList