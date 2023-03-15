import React, {Component} from 'react';

class User extends Component{
    render(){
        return(
            <div>
                <div>Name:{this.props.name}</div>
                <div>Age:{this.props.age}</div>
            </div>
        )
    }
}

export default User;
