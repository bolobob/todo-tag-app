import { Task } from "./../types/task";
import { useReducer } from "react";

type State = {
  isEdited: boolean;
  tasks: Task[];
};

type Action = { type: "toggleEdited" } | { type: "setTasks"; tasks: Task[] };

const initialState: State = {
  isEdited: false,
  tasks: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "toggleEdited":
      return { ...state, isEdited: !state.isEdited };
    case "setTasks":
      return { ...state, tasks: action.tasks };
    default:
      return state;
  }
};

const useTodos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleEdited = () => dispatch({ type: "toggleEdited" });
  const setTasks = (tasks: Task[]) => dispatch({ type: "setTasks", tasks });

  return { state, toggleEdited, setTasks } as const;
};

export default useTodos;
