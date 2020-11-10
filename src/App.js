//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
//import { Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      computerList: [
        {id: 1, title: "Dell", picURL: "", description: ""}
        ,{id: 2, title: "HP", picURL: "", description: ""}
        ,{id: 3, title: "Lenovo", picURL: "", description: ""}
        ,{id: 4, title: "Samsung", picURL: "", description: ""}
        ,{id: 5, title: "Motorola", picURL: "", description: ""}
        ,{id: 6, title: "Huawei", picURL: "", description: ""}
      ]
    }
  }
  render(){
  return (
    <div className="App">
      <div className='container-fluid'>
        <h1>BERRIESNET</h1>
        <h2>Website under building stage</h2>
        <h3>Work in progress!!!!!!!!!!!!!</h3>
          {/* <Route exact path="/" component={HomePage} /> */}
      </div>
    </div>
  );
  }
  }

export default App;
