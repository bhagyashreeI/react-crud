import './App.css';
import React, { Component } from "react";
import Control from "./components/Controls/Control";
import Users from './containers/Users/Users';
import Add from './components/Controls/Modal/Add/Add';

class App extends Component{
  state = {
    showButton:true,
    showAddModal:false,
    users:[
      { id: 'p1', name: 'Shree', age: 31 },
      { id: 'p2', name: 'Yuga', age: 30 },
      { id: 'p3', name: 'Tanuja', age: 26 }
    ]
  };

  handleModal = () => {
    this.setState({ showAddModal : true})
  };

  handleAddUser = () =>{
    let ucnt =  this.state.users.length;
    let newcnt = ucnt + 1;
    let uid = 'p'+newcnt;
    let newuser = { id: uid,name:'test4',age:36};
    const users = [...this.state.users];
    users.push(newuser);
    this.setState({ users: users });
  }

  

  render(){
    let addmodal = null;
    if (this.state.showAddModal){
      addmodal = (
        <Add />
      ) 
    }
    
      if (this.state.showButton) {
        return (
        <div >
            <Control type="Add" color="success"  clicked={this.handleAddUser} openmodal={this.handleModal} />
            <Control type="Refresh" color="primary" />
          
            {addmodal}
            
            <Users users={this.state.users}></Users>
        </div>
        )
      }
      
    
  }
}

export default App;
