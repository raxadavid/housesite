import Types from './components/Types';
import Home from './components/Home';
import { types1, types2, types3 } from './Data/types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
   <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
          <Link className="navbar-brand" to="/">House</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/types">Types</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/types">
            <Types 
              typesRow1={types1}
              typesRow2={types2}
              typesRow3={types3}
            />
          </Route>
        </Switch>
      </div>
    </Router>
)

export default App;
