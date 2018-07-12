import React, {Component} from 'react';
import {Link } from 'react-router-dom';
class CreateComp extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: '',
        description: '',
        dateStart: '',
        dateFinish: '',
        visible: false
    }
}

handleSubmit = (e) => {
console.log(this.state);
    fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/create', {
      method: 'POST',
      headers: {
        // 'Access-Control-Allow-Headers': 'origin, content-type, accept',
        // 'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        dateTimeStart: this.state.dateStart,
        dateTimeFinish: this.state.dateFinish,
        visible: this.state.visible})
    }).then(res=>res.json())
      .then(res => console.log(res));
e.preventDefault();
}

updateName(e) {
  this.setState({
        name: e.target.value ? e.target.value : ''
  })
}

updateDateStart(e) {
  this.setState({
        dateStart: e.target.value ? e.target.value : ''
  })
}

updateDateFinish(e) {
  this.setState({
        dateFinish: e.target.value ? e.target.value : ''
  })
}

updateDescription(e) {
  this.setState({
        description: e.target.value ? e.target.value : ''
  })
}

updateVisible(e) {
if (e.target.value === '1') {
  this.setState({
    visible: true
  })
}
else {this.setState({visible: false})}
}
    render() {

        return (
            <div>
            <div className="container">
              <h2 align="center">Создание соревнования</h2>
            <form align="center" onSubmit={this.handleSubmit}>
                <label className="textInput">
                  <p>  Название
                    <input  value={this.state.name} onChange={e => this.updateName(e)} /></p>
                  <p>  Описание
                    <input value={this.state.description} onChange={e => this.updateDescription(e)} /></p>
                  <p>  Дата начала
                    <input value={this.state.dateStart} onChange={e => this.updateDateStart(e)} /></p>
                  <p>  Дата окончания
                    <input value={this.state.dateFinish} onChange={e => this.updateDateFinish(e)} /></p>
                  <p>  Visible
                    <input value={this.state.visible} onChange={e => this.updateVisible(e)} /></p>
                    
                </label>
                <p> <button align="center" type="submit" className="button"><Link to="/cardOfComp">Создать</Link></button></p>
            </form>
            </div>
          </div>
        );
    }

}

export default CreateComp