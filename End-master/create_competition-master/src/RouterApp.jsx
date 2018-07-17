import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Competitions from './pages/Competitions.jsx';
import Promptly from './pages/Promptly.jsx';
import Regulation from './pages/Regulation.jsx';
import Users from './pages/Users.jsx';
import CreateComp from './pages/CreateComp';
import CardOfComp from './pages/CardOfComp';
import PageWrapper from './pages/pageWrapper';

export default class RouterApp extends Component {
    //constructor(props) {
     //   super(props);
   // }

    render() {
        return (
            <HashRouter>
              <PageWrapper>
                <Switch>
                    <Route exact path="/" component={Competitions}/>
                    <Route path="/promptly" component={Promptly}/>
                    <Route path="/regulation" component={Regulation}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/createComp" component={CreateComp}/>
                    <Route path="/cardOfComp" component={CardOfComp}/>
                </Switch>
              </PageWrapper>
            </HashRouter>
        );
    }
}
