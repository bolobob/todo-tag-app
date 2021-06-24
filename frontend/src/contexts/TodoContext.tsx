import { createContext } from "react";
import { Task } from "../types/task";

const TodoContext = createContext(
  {} as {
    state: { tasks: Task[]; isEdited: boolean };
    setTasks: (tasks: Task[]) => void;
  }
);

export default TodoContext;
