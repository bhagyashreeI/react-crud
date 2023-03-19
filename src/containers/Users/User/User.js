import React, { Component } from 'react';

import Control from '../../../components/Controls/Control';

class User extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>
                    
                    <Control type="Edit" color="primary" clickmethod={() => this.props.edituser(this)} />
                    <Control type="Delete" color="danger" />
                </td>
            </tr>

        )
    }
}

export default User;
