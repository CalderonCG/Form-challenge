
import { useReducer } from 'react'
import './App.scss'
import Form, { type FormType } from './components/Form/Form'
import TaskList from './components/TaskList/TaskList'

//Types
type ListType = FormType[]

type ActionType = 'add' | 'toggle'

//Reducer function
const listReducer = (state: ListType, action: ActionType) =>{

}

function App() {
  const [list, dispatch] = useReducer(listReducer, [])
  return (
    <div className='app_container'>
    <Form/>
    <TaskList/>
    </div>
  )
}

export default App
