import { useEffect, useReducer, useState } from "react";
import "./App.scss";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import type { ActionType, TaskType } from "./Utils/TaskTypes";
import ControlBar from "./components/ControlBar/ControlBar";

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
  //Const and states------------------------------
  const [list, dispatch] = useReducer(listReducer, [], init);
  const [parameters, setParameters] = useState({
    search: "",
    priority: "All",
    status: "All",
  });
  const [showForm, setShowForm] = useState(false);

  //List filtering ---------------------------
  const filteredList = list.filter((task) => {
    const statusMatch =
      (task.completed && parameters.status === "Completed") ||
      (!task.completed && parameters.status === "Pending") ||
      parameters.status === "All";
    const priorityMatch =
      task.priority === parameters.priority || parameters.priority === "All";
    const searchMatch = task.name
      .toLowerCase()
      .startsWith(parameters.search.toLowerCase());
    return priorityMatch && searchMatch && statusMatch;
  });

  //Store changes in list in local storage-------------
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(list));
  }, [list]);

  return (
    <div className="app_container">
      <h1>Task manager</h1>
      <div className="app_container_tabs">
        <button onClick={() => setShowForm(false)}>Show Tasks</button>
        <button onClick={() => setShowForm(true)}>Add task</button>
      </div>
      <ControlBar value={parameters.search} handleChange={setParameters} />
      <div className="app_container_todo">
        <Form
          handleAdd={dispatch}
          isDisplayed={showForm}
          handleDisplay={setShowForm}
        />
        <TaskList
          list={filteredList}
          handleToggle={dispatch}
          isDisplayed={!showForm}
        />
      </div>
    </div>
  );
}

export default App;
