import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Competitions from './pages/Competitions.jsx';
import Promptly from './pages/Promptly.jsx';
import Regulation from './pages/Regulation.jsx';
import Users from './pages/Users.jsx';
import CreateComp from './pages/CreateComp';
import CardOfComp from './pages/CardOfComp';
//import Navbar from './components/Navbar';
class App extends Component {
  render() {
    return (

        <Router>
 
          <Switch>
            <Route exact path="/" component={Competitions}/>
            <Route path="/promptly" component={Promptly}/>
            <Route path="/regulation" component={Regulation}/>
            <Route path="/users" component={Users}/>
            <Route path="/createComp" component={CreateComp}/>
            <Route path="/cardOfComp" component={CardOfComp}/>
          </Switch>
        </Router>

   
    );
  }
}

export default App;
