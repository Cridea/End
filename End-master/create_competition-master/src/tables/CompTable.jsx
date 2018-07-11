import React, {Component} from "react";
import "../tables/CompTable.css";

class CompTable extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
      columns: []
    };
  }

  getTabelComp = () =>{
    fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/list', {mode: 'cors'})
    .then(response => {
      console.log(response);
      return response.json()
    })
    .then((content) => {
      console.warn(content);
      this.setState({
        content: content
      });
    });
}

  render() {
  
    const contents = this.state.content;
    let rows = <tr></tr>;
    if (contents.content){
        rows = contents.content.map((contentRow) =>
            <tr className="tr">
              <td className="td">{contentRow.name}</td>
              <td className="td">{contentRow.dateStart}</td>
              <td className="td">{contentRow.dateFinish}</td>
            </tr>)
  }
    return (
      <div>
            <h2 align="center">Таблица соревнований</h2>
            <div className="elementsComp body">
            
              <table className="table">
              <tbody>
             
                <tr className="tr">
                  <th className="th">Название</th>
                  <th className="th">Дата начала</th>
                  <th className="th">Дата окончания</th>
                  <th className="th">Visible</th>
                </tr>
                {rows}
              </tbody>
              
          </table>
          <button onClick={this.getTabelComp} className="button buttonPosition absolute">Update</button>
          </div>
          </div>
   
          );
  }
}

export default CompTable