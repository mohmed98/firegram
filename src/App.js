import React from "react";
import Title from "./comps/Title";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./Admin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
