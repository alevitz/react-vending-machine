
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MilkShake from "./MilkShake";
import Beer from "./Beer";
import Soda from "./Soda";
import Home from "./Home";
import NavBar from "./NavBar";

function VendingMachine(){
return (
  <div>
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/milkshake">
        <MilkShake />
      </Route>
      <Route exact path="/beer">
        <Beer />
      </Route>
      <Route exact path="/soda">
        <Soda />
      </Route>
      <Route>
        <Home exact path="/"/>
      </Route>
      </Switch>
    </BrowserRouter>
  </div>
)
}

export default VendingMachine;