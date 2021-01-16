import "./App.css";
import "./App.scss";

import { Register, Login } from "./components/Auth";
import { Chat } from "./components/Chat";
import { ProtectedRoute } from "./components/Route";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ProtectedRoute exact path="/" component={Chat} />
          
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route render={() => <h1>404 Page Not Found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
