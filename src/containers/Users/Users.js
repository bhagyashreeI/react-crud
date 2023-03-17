import React, {Component} from "react";
import User from "./User/User";
import axios from 'axios';
import Control from "../../components/Controls/Control";
import Add from '../../components/Controls/Modal/Add/Add';

class Users extends Component{

    
    constructor(props) {
        super(props)
        this.handleModal = this.handleModal.bind(this);
        this.state = {
            userlist: [],
            showButton: true,
            showAddModal: false
        };
    }
    handleModal = (param1) => {
        this.setState({ showAddModal: param1 })
    };

    handleAddUser = () => {
        let ucnt = this.state.users.length;
        let newcnt = ucnt + 1;
        let uid = 'p' + newcnt;
        let newuser = { id: uid, name: 'test4', age: 36 };
        const users = [...this.state.users];
        users.push(newuser);
        this.setState({ users: users });
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
        let addmodal = null;
        if (this.state.showAddModal) {
            addmodal = (
                <Add action={this.handleModal} />
            )
        }
        let ulist = this.state.userlist.map((p, index) => {
            return <User
                name={p.name}
                email={p.email}
                key={p.id}>
            </User>
        });
        return (
            <div>
                {addmodal}
                
                <div className="container">
                    <h3 className="p-3 text-center">Users</h3>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th><Control type="Add" color="primary" clicked={this.handleAddUser} openmodal={() => this.handleModal(true)} /></th>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ulist}
                        </tbody>
                    </table>
                </div>
            </div>
            
        )
    }
}

export default Users;