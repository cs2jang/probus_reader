import React from "react";
import "./App.css";
import MainList from "./components/list";
import { Adder, Main } from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainList />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Adder" component={Adder} />
          <Route exact path="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
