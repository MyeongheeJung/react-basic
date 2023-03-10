import { createContext, useReducer } from "react";
import tasksReducer, { initialTasks } from "./TasksReducer";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export default function TasksProviser({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
