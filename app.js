import {
  BrowserRouter as router,
  Switch, 
  Route
  Link 
 } from 'react-router-dom'
import { Button,

} from "reactstrap";
import Home from './pages/home'
import Support from './pages/support'

const app = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/support">Support</Link>
        </nav>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/support">
          </Route>
          </Switch>
        </Switch>
      </div>
    </Router>
  )
}