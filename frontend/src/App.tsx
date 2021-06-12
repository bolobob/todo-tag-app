import React, { VFC } from "react";
import { createClient, Provider } from "urql";
import Todos from "./Todos";
import "./App.css";

const client = createClient({
  url: "http://localhost:3001/graphql",
});

const App: VFC = () => {
  return (
    <div className="App">
      <Provider value={client}>
        <Todos />
      </Provider>
    </div>
  );
};

export default App;
