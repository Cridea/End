import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import CompTable from "../tables/CompTable";
//import ReactTable from "react-table";
import "react-table/react-table.css"; 
import {Link, Switch } from 'react-router-dom';

class Competitions extends Component {


 

  render() {

    return (
      <div>
        <Navbar/>
        <Switch>
          <button className="button buttonPosition absolute"><Link to="/createComp">Создать соревнование</Link></button>
        </Switch>
        <CompTable/>
      </div>
   
        );
  }
}

export default Competitions