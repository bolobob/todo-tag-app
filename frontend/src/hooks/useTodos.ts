import { useReducer } from "react";

type State = {
  isEdited: boolean;
};

type Action = {
  type: "toggleEdited";
};

const initialState: State = {
  isEdited: false,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "toggleEdited":
      return { isEdited: !state.isEdited };
    default:
      return state;
  }
};

const useTodos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleEdited = () => dispatch({ type: "toggleEdited" });

  return { state, toggleEdited } as const;
};

export default useTodos;
