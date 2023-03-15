import React, {Component} from "react";
import User from "./User/User";

class Users extends Component{

    render(){
        return this.props.users.map((p, index) => {
            return <User
                name={p.name}
                age={p.age}
                key={p.id}>
            </User>
        })
    }
}

export default Users;