import React, {Component} from "react";
import User from "./User/User";
import axios from 'axios';

class Users extends Component{

    state = {
        userlist:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const userlist = res.data;
                console.log(res.data);
                this.setState({ userlist: userlist });
            })
    }

    render(){
        return this.state.userlist.map((p, index) => {
            return <User
                name={p.name}
                email={p.email}
                key={p.id}>
            </User>
        })
    }
}

export default Users;