import React, {Component} from 'react';
import './App.css';
import Form from './Form'

class App extends Component {

  initialState = {
    make: '',
    model: '',
    year: '',
    carImage: ''
  }

  state = this.initialState

  // componentDidMount(){
  //   this.getCar()
  // }

  // const parse = require('xml-parser');
  // const stringify = require('xml-stringify');
  //
  // const ast = parse('http://localhost:3000/proxy');
  // const xml = stringify(ast);
  //
  // console.log(xml);




  getCar = (make, model, year) => {
    fetch(`http://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=${make}+${model}+${year}`)
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(response => {
        console.log(response.firstChild.innerHTML)
        this.setState({
          // make: response.target.value,
          // model: response.target.value,
          carImage: response.firstChild.innerHTML
      })
    })
  }



  render(){
    return (
      <div className="App">
        <h1>J-Car</h1>
        <h2>Feel free to look up any car you want !</h2>
        <Form getCar={this.getCar}/>
        <img src={this.state.carImage}/>
      </div>
    );
  }
}

export default App;
