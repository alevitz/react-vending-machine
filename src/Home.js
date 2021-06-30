
import { Link } from "react-router-dom";

function Home(){
return (
  <div>
    Home!!!!!
    <p>Go to <Link to="/milkshake">Milkshakes</Link> page</p>
    <p>Go to <Link to="/beer">Beer</Link> page</p>
    <p>Go to <Link to="/soda">Soda</Link> page</p>
  </div>
)
}

export default Home;