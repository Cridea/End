import React, { Component } from 'react';
//import { render } from "react-dom";
import { makeData, Logo } from "../tables/UsersTable";
import ReactTable from "react-table";
import "react-table/react-table.css";
class Users extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
    render() {
      const { data } = this.state;
      return (
        <div>
                 <div className="container">
                 <ReactTable
          data={data}
          columns={[
            {
              Header: "Пользователь №",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "ФИО",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: 'Логин',
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            },
            {
              Header: 'Роль',
              columns: [
                {
                  //Header: "Visits",
                  accessor: "роль"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />

        <Logo />

            </div>
            </div>

            );
        }
      }

      export default Users
