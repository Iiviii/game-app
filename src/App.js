import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './features/Home'
import GameDetails from './features/GameDetails'
import TeamDetails from './features/TeamDetails'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gamedetails/:id" component={GameDetails} />
          <Route path="/teamdetails/:id" component={TeamDetails} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
