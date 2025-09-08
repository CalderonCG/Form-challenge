import type { TaskType } from '../../Utils/TaskTypes'
import TaskCard from '../TaskCard/TaskCard'
import './TaskList.scss'

//Types---------------------
type ListProps = {
  list: TaskType[]
}
function TaskList({list}: ListProps) {
  return (
    <div className='list'>
        <h1>Task List</h1>
        {list.map(task => <TaskCard key={task.id} task={task}/>)}
    </div>
  )
}

export default TaskList