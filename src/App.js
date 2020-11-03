import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "./views/Home"
import GameDetails from "./views/GameDetails"
import TeamDetails from "./views/TeamDetails"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gamedetails/:id" component={GameDetails} />
          <Route path="/teamdetails/:id" component={TeamDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
