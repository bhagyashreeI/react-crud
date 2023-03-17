import './App.css';
import React, { Component } from "react";
import Users from './containers/Users/Users';


class App extends Component{
  constructor(props) {
    super(props)
    
    this.state = {
      showData: true
    };
  }

  render(){
    return (
      <div>
        <Users />
      </div>
    )
  }
}

export default App;
