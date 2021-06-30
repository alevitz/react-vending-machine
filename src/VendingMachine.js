
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MilkShake from "./MilkShake";
import Beer from "./Beer";
import Soda from "./Soda";
import Home from "./Home";

function VendingMachine(){
return (
  <div>
    <BrowserRouter>
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