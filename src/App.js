import "./App.css";
import Addtask from "./components/Addtask";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="container">
      
      <Switch>
        <Route exact path="/" component={Addtask} />
      </Switch>
    </div>
  );
}

export default App;
