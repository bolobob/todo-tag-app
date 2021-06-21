import { createContext } from "react";

const TodoContext = createContext<{ isEdited: boolean }>({ isEdited: false });

export default TodoContext;
