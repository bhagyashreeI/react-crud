import React, { Component, useState } from "react";
import User from "./User/User";
import axios from 'axios';
import Control from "../../components/Controls/Control";
import Add from '../../components/Controls/Modal/Add/Add';

class Users extends Component {

    state = {
        userlist: [],
        user:{},
        showButton: true,
        showAddModal: false,
        udata: {
            name: '',
            email: ''
        },
        usermodaltitle:''
    }


    handleModal = (param1,mtitle) => {
        if(mtitle == 'Add'){
            this.setState({ user: {} });
        }
        this.setState({ showAddModal: param1 });
        this.setState({usermodaltitle:mtitle});
        
    };

    handleSaveUser = (modalstatus, userdata,ustatus) => {
        console.log("userdata", userdata);
        console.log("ustatus", ustatus);
        //return false;
        const users = [...this.state.userlist];
        if (ustatus == 'Add'){
            let ucnt = this.state.userlist.length;
            let newcnt = ucnt + 1;
            let uid = 'p' + newcnt;
            let newuser = { id: uid, name: userdata.name, email: userdata.email };
            users.push(newuser);
        }
        if (ustatus == 'Edit') {
            const uIndex = this.state.userlist.findIndex((u) => {
                return u.id === this.state.user.id;
            });
            
            const user = { ...this.state.userlist[uIndex] };
            user.name = userdata.name;
            user.email = userdata.email;
            
            users[uIndex] = user;
            
        }
        
        
        this.setState({ userlist: users });

        if (modalstatus == false) {
            this.setState({ showAddModal: modalstatus })
        }
        
    }

    handleEditUser = (param1) => {
        
        axios.get('https://jsonplaceholder.typicode.com/users?id=' + param1)
            .then(res => {
                const user = res.data;
                this.setState({ user: user[0] });
                this.handleModal(true, 'Edit')
            })
    }

    handleDelUser = (param1) => {
        const users = [...this.state.userlist];
        users.splice(param1, 1); 
        this.setState({ userlist: users });
    }

    fetchData() {
        setTimeout(() => {
            console.log('Our data is fetched');
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => {
                    const userlist = res.data;
                    this.setState({ userlist: userlist });
                    this.setState({ user: userlist[0] });
                })
        }, 1000)
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        let addmodal = null;
        if (this.state.showAddModal) {
            addmodal = (
                <Add action={this.handleModal} saveclose={this.handleSaveUser}
                    savenext={this.handleSaveUser} title={this.state.usermodaltitle}
                    uinfo={this.state.user}
                />
            )
        }
        let ulist = this.state.userlist.map((p, index) => {
            return <User
                name={p.name}
                email={p.email}
                key={p.id}
                edituser={()=>this.handleEditUser(p.id)}
                deluser={()=>this.handleDelUser(index)}>
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
                                <th><Control type="Add" color="primary" clickmethod={() => this.handleModal(true,'Add')} /></th>
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