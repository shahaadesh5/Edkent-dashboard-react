import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Sidenav from './components/Sidenav/Sidenav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
      <div className="page-adjust">
        <Sidenav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
