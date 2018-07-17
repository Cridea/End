<<<<<<< HEAD
import React from 'react';

class CreateComp extends React.Component {

  constructor(props) {
=======
import React, {Component} from 'react';
import {Link } from 'react-router-dom';//нужна пустая строка. логически отделяяй
class CreateComp extends Component {
  constructor(props){
>>>>>>> b7363e553c166b2ca4bd6628b7d7403b268b2012
    super(props);
    this.state = {
      name: '',
      description: '',
      dateStart: '',
      dateFinish: '',
      visible: false,
      submitButtonDisabled: true  //т.к. поля пустые
    }
<<<<<<< HEAD
  }

  handleSubmit = (e) => {
    console.log(this.state);
=======
}
//отступы у методов 2-4 пробела (см. constuctor/render)
handleSubmit = (e) => {
console.log(this.state);
>>>>>>> b7363e553c166b2ca4bd6628b7d7403b268b2012
    fetch('https://afternoon-woodland-86438.herokuapp.com/competitions/create', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Headers': 'origin, content-type, accept',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        dateStart : this.state.dateStart,
        dateFinish: this.state.dateFinish,
        visible: this.state.visible})
    }).then(res=>{
      console.log(res);
      this.setState({name: '', description: '', dateStart: '', dateFinish: ''});
      console.log(this.state);
      this.checkFieldsEmpty();
      res.ok ? console.log('success') : console.warn('something gone wrong');
    });
    e.preventDefault();
  };

  updateName(e) {
    this.checkFieldsEmpty() //можно проверять здесь
    this.setState( {name: e.target.value} );
  }

  updateDateStart(e) {
    this.checkFieldsEmpty()
    this.setState( {dateStart: e.target.value} )
  }

  updateDateFinish(e) {
    this.checkFieldsEmpty()
    this.setState( {dateFinish: e.target.value} )
  }

  updateDescription(e) {
    this.checkFieldsEmpty()
    this.setState( {description: e.target.value} )
  }

<<<<<<< HEAD
  updateVisible(e) {
    if (e.target.value === '1') {
      this.setState({visible: true})
    }
    else {
      this.setState({visible: false})
    }
  }

  checkFieldsEmpty = () => {
    if ((this.state.name.length&&this.state.description.length&&this.state.dateStart.length&&this.state.dateFinish.length) === 0) {
      this.setState({submitButtonDisabled: true});
    } else {
      this.setState({submitButtonDisabled: false});
    }
    console.log(this.state.submitButtonDisabled);
  };

  render() {
    return (
        <div className="createComp width_input">
          <form onSubmit={this.handleSubmit} className='centerInput textInput'>
            <div className='textInput'>
              <p>Create competition:</p>
              <p>Название</p>
              <p><input id='inputName'
                      value={this.state.name}
                      onChange={e => this.updateName(e)}/></p>
              <p>Описание</p>
              <p><input id='inputDescription'
                      value={this.state.description}
                      onChange={e => this.updateDescription(e)}/></p>
              <p>Дата начала</p>
              <p><input id='inputDateStart'
                      value={this.state.dateStart}
                      onChange={e => this.updateDateStart(e)}/></p>
              <p>Дата окончания</p>
              <p><input id='inputDateFinish'
                      value={this.state.dateFinish}
                      onChange={e => this.updateDateFinish(e)}/></p>
              <p>Visible</p>
              <p><input id='inputVisible'
                      value={this.state.visible}
                      onChange={e => this.updateVisible(e)}/></p>
              <button className="button" onClick={() => this.goToState('/cardOfComp')}>Создать</button>
            </div>
          </form>
        </div>
    )
  }
}

export default CreateComp;
=======
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
>>>>>>> b7363e553c166b2ca4bd6628b7d7403b268b2012
