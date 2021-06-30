
import { BrowserRouter, Route } from "react-router-dom";

import MilkShake from "./MilkShake";
import Beer from "./Beer";
import Soda from "./Soda";
import Home from "./Home";

function VendingMachine(){
return (
  <div>
    <BrowserRouter>
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
    </BrowserRouter>
  </div>
)
}

export default VendingMachine;