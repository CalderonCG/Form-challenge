import { useReducer } from "react";
import "./App.scss";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import type { ActionType, TaskType } from "./Utils/TaskTypes";

//Types
type ListType = TaskType[];


//Reducer function
const listReducer = (state: ListType, action: ActionType) => {
  switch (action.type) {
    case "add":
      return [...state, action.value];
    default:
      return state
  }
};

function App() {
  const [list, dispatch] = useReducer(listReducer, []);
  console.log(list)
  return (
    <div className="app_container">
      <Form handleAdd={dispatch} />
      <TaskList list={list}/>
    </div>
  );
}

export default App;
