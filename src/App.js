import './App.css';
import React, { Component } from "react";
import Control from "./components/Controls/Control";
import Users from './containers/Users/Users';
import Add from './components/Controls/Modal/Add/Add';

class App extends Component{
  state = {
    showButton:true,
    showAddModal:false
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
            <div className="container">
              <h3 className="p-3 text-center">Users</h3>
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <Users />
                </tbody>
              </table>
            </div>
        </div>
        )
      }
      
    
  }
}

export default App;
