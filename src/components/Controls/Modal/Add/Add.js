import React, {Component} from "react";
import './Add.css';

class Add extends Component{
    handleSaveUser = (uaction) => {
        alert(uaction)
    }
    render(){
            return (
                <div className="Modal">
                    <h1>Add User</h1>
                    <div>
                        <label>Name: </label><input type="text" name="name" />
                        <label>Age: </label><input type="text" name="age" />
                        <button onClick={() => this.handleSaveUser('close')}>Save & Close</button>
                        <button onClick={() => this.handleSaveUser('next')}>Save & Next</button>
                    </div>
                </div>
            )
        
        
    }
}
export default Add;
