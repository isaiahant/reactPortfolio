import {
  BrowserRouter as router,
  Switch, 
  Route
  Link 
 } from 'react-router-dom'
import { Button,

} from "reactstrap";
import Home from './pages/home'
import Support from './pages/contact'

const app = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/contact">
          </Route>
          <Route path="/portfolio"></Route>
          </Switch>
        </Switch>
      </div>
    </Router>
  )
}