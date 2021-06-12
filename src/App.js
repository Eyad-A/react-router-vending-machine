import React from "react";
import { BrowserRouter, Route, } from "react-router-dom";
import Chips from "./Chips";
import Candy from "./Candy";
import Soda from "./Soda";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <BrowserRouter>
        <NavBar />        
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/candy">
          <Candy />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
