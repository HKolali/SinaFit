import routes from "./routes"
import { useRoutes } from "react-router-dom";
import Menu from "./Components/Menu/Menu"
import Particle from "./Components/Particle/Particle"
import './style/App.css';

function App() {

  let router = useRoutes(routes)

  return (
    <div className="app">
      {/* <Particle/> */}
      <div className="leftSide">
        {router}
      </div>
      <div className="rightSide">
        <Menu />
      </div>
    </div>
  );
}

export default App;
