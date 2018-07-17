import React from 'react';
import CompTable from "../tables/CompTable";
//import ReactTable from "react-table";
import "react-table/react-table.css";
import {Redirect } from 'react-router-dom';
import BaseComponent from '../components/baseComponent';

class Competitions extends BaseComponent {
 // constructor(props) {
   // super(props);
 // }

  render() {
        if (this.reload) {
            this.reload = false;
            return <Redirect to={this.redirect} push={true} />;
        }
    return (
      <div>
          <button className="button buttonPosition absolute" onClick={() => this.goToState('/createComp')}>Создать соревнование</button>
        <CompTable/>
      </div>
    );
  }
}

export default Competitions
