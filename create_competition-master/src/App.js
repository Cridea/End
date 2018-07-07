import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

//import InputInfo from './components/InputInfo.js'
//import TabelComp from './components/TabelComp.js'
import './App.css';
import Competitions from './pages/Competitions.jsx';
import Promptly from './pages/Promptly.jsx';
import Regulation from './pages/Regulation.jsx';
import Users from './pages/Users.jsx';
class App extends Component {
  render() {
    return (

            <Router>
               <div>
                 <Route exact path="/" component={Competitions}/>
                 <Route path="/promptly" component={Promptly}/>
                 <Route path="/regulation" component={Regulation}/>
                 <Route path="/users" component={Users}/>
                </div>
            </Router>
   
    );
  }
}

export default App;
