
import { NavLink } from "react-router-dom";

const ACTIVE_STYLES = {
  fontWeight: "bold",
  color: "black",
};


function NavBar(){
return (
  <nav>
    <NavLink exact to="/" activeStyle={ ACTIVE_STYLES }>
        Home
      </NavLink>
      <NavLink exact to="/milkShake" activeStyle={ ACTIVE_STYLES }>
      
        MilkShake
      </NavLink>
      <NavLink exact to="/beer" activeStyle={ ACTIVE_STYLES }>
        Beer
      </NavLink>
      <NavLink exact to="/soda" activeStyle={ ACTIVE_STYLES }>
        Soda
      </NavLink>
  </nav>
)
}

export default NavBar;