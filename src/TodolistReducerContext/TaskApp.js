import React from "react";
import Addtask from "./Addtask";
import TasksProviser from "./Context";
import TaskList from "./TaskList";

function TaskApp() {
  return (
    <TasksProviser>
      <h1>To Do List</h1>
      <Addtask />
      <TaskList />
    </TasksProviser>
  );
}

export default TaskApp;
