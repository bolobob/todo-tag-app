import React, { VFC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { createClient, Provider } from "urql";
import Todos from "./Todos";
import "./App.css";

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

const App: VFC = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Todos
            </Typography>
            <Button color="inherit">編集</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Provider value={client}>
        <Todos />
      </Provider>
    </div>
  );
};

export default App;
