import type { ActionType, TaskType } from '../../Utils/TaskTypes'
import TaskCard from '../TaskCard/TaskCard'
import './TaskList.scss'

//Types---------------------
type ListProps = {
  list: TaskType[]
  handleToggle: React.ActionDispatch<[action: ActionType]>
}
function TaskList({list, handleToggle}: ListProps) {
  return (
    <div className='list'>
        {list.map(task => <TaskCard key={task.id} task={task} handleToggle={handleToggle}/>)}
    </div>
  )
}

export default TaskList