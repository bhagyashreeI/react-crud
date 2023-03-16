import React, {Component} from "react";
import './Add.css';

class Add extends Component{
    
    handleSaveUser = (uaction) => {
        
        if(uaction == 'close'){
            
        }
    }
    closeModal = () => {
        
    }
    
    render(){
            return (
                <div className="Modal">
                    <button type="button" className="btn-close" aria-label="Close"  onClick={this.props.action.bind(this, false)}  >&times;</button>
                    <h1>Add User</h1>
                    <div>
                        <label>Name: </label><input type="text" name="name" />
                        <label>Age: </label><input type="text" name="age" />
                        <button className="btn btn-primary mr-2 ml-2"  onClick={() => this.handleSaveUser('close')}>Save & Close</button>
                        <button className="btn btn-primary" onClick={() => this.handleSaveUser('next')}>Save & Next</button>
                    </div>
                </div>

                
            )
        
        
    }
}
export default Add;
