import React, {Component} from 'react';
import  './Control.css';

import Hoc from './../../hoc/Hoc';

class Control extends Component {
    render(){
        return (
            <Hoc>
                <button className={"button m10-left m10-top btn-sm " + this.props.color + " " + this.props.customcls} onClick={this.props.clickmethod}>
                    {this.props.type} 
                </button>
            </Hoc>
        );
    }
    
}


export default Control;