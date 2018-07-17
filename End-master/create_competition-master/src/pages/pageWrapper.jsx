import * as React from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../components/Navbar.css';

export default class PageWrapper extends React.Component {
   // constructor(params) {
      //  super(params);
   // }

    render() {
        if (this.reload) {
            this.reload = false;
            return <Redirect to={this.redirect} push={true} />;
        }
        return (
            <div>
              <Navbar />
              {this.props.children}
            </div>
        );
    }
}
