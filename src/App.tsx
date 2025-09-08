import { useEffect, useReducer } from "react";
import "./App.scss";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import type { ActionType, TaskType } from "./Utils/TaskTypes";

//Types-----------------------
type ListType = TaskType[];

//Reducer function---------------------------
const listReducer = (state: ListType, action: ActionType) => {
  switch (action.type) {
    case "add":
      return [...state, action.value];
    case "toggle":
      return state.map((task) =>
        task.id === action.value
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
};

//Initial value of the list based on localStorage content
const init = () => {
  return localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList") || "")
    : [];
};

//Component--------------------------
function App() {
  const [list, dispatch] = useReducer(listReducer, [], init);
  console.log(list);

  //Store changes in list in local storage
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(list));
  }, [list]);

  return (
    <div className="app_container">
      <Form handleAdd={dispatch} />
      <TaskList list={list} handleToggle={dispatch}/>
    </div>
  );
}

export default App;
