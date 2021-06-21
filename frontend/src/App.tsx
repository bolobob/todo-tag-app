import { VFC, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { createClient, Provider } from "urql";
import Todos from "./Todos";
import "./App.css";

import TodoContext from "./contexts/TodoContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const client = createClient({
  url: "http://localhost:3001/graphql",
});

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

const App: VFC = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <TodoContext.Provider value={{ isEdited: state.isEdited }}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Todos
              </Typography>
              <Button
                onClick={() => dispatch({ type: "toggleEdited" })}
                color="inherit"
              >
                {state.isEdited ? "決定" : "編集"}
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <Provider value={client}>
          <Todos />
        </Provider>
      </TodoContext.Provider>
    </div>
  );
};

export default App;
