import React, {Component} from 'react';

import Control from '../../../components/Controls/Control';

class User extends Component{
    render(){
        return(
            <tr key={this.props.id}>
                            <td>{this.props.name}</td>
                            <td>{this.props.email}</td>
                            <td>
                                <Control type="Edit" color="primary" />
                                <Control type="Delete" color="danger" />
                            </td>
                        </tr>
            
        )
    }
}

export default User;
