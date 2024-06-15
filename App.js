import "./App.css";
import { Routesfile } from "./Routesfile";


import "./App.css";

function App() {

  const handleClick = () => {
    window.location = "/login"
  };
  return (
    <div>
      <nav>
        <h1 className="head">OSG</h1>
        <div>
          <button onClick={handleClick}>Login</button>
          <button>SignUp</button>
        </div>
      </nav>
      <Routesfile />
    </div>
  );
}

export default App;
