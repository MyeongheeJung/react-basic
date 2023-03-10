import React, { useContext } from "react";
import { TasksContext } from "./Context";
import TaskContent from "./TaskContent";

function TaskList() {
  const tasks = useContext(TasksContext);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskContent task={task} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
