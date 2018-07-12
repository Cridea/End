import React, {Component} from 'react';
import {Link } from 'react-router-dom';//нужна пустая строка. логически отделяяй
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
//отступы у методов 2-4 пробела (см. constuctor/render)
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
else {this.setState({visible: false})} // блок else с новой строки, с фигурными скобками
}
    render() {
      //убрать пустую строку
        return (
            <div> //зачем этот div, если есть ниже, который охватывает весь блок
            <div className="container"> //---------------------------------
              <h2 align="center">Создание соревнования</h2>
            <form align="center" onSubmit={this.handleSubmit}>
                <label className="textInput"> //почитай нужен ли label или нет
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
                    //убрать отступ
                </label> 
              //p используется только для текста. Для того чтобы присвоить стиль чему-либо используй div
                <p> <button align="center" type="submit" className="button"><Link to="/cardOfComp">Создать</Link></button></p>
            </form>
            </div> //------------------------------------------------
          </div> //зачем этот div, если есть выше, который охватывает весь блок
        );
    }
//пустая строка
}
//ещё раз проверить все отступы и логические пустые строки
export default CreateComp
