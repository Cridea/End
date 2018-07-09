import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Competitions from './pages/Competitions.jsx';
import Promptly from './pages/Promptly.jsx';
import Regulation from './pages/Regulation.jsx';
import Users from './pages/Users.jsx';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Competitions}/>
            <Route path="/promptly" component={Promptly}/>
            <Route path="/regulation" component={Regulation}/>
            <Route path="/users" component={Users}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
