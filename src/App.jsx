import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Spells from './pages/Spells'
import SpellDetails from './pages/SpellDetails'
import Equipment from './pages/Equipment'
import Races from './pages/Races'
import Classes from './pages/Classes'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Welcome to my SPA</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/Spells">Spells</Link>
            </li>
            <li>
              <Link to="/Equipment">Equipment</Link>
            </li>
            <li>
              <Link to="/Races">Races</Link>
            </li>
            <li>
              <Link to="/Classes">Classes</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/Spells" component={Spells}></Route>
        <Route
          exact
          path="/SpellDetails:index"
          component={SpellDetails}
        ></Route>
        <Route exact path="/Equipment" component={Equipment}></Route>
        <Route exact path="/Races" component={Races}></Route>
        <Route exact path="/Classes" component={Classes}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
