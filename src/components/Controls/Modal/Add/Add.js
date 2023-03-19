import React, { Component, useState } from "react";
import './Add.css';

export default function Add(props) {
    const[userInfo, setUserInfo] = useState({
        name: props.uinfo.name,
        email: props.uinfo.email
    });

    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       
        props.saveclose(false, userInfo, props.title);
    };

    
        return (
            <div className="Modal">
                <button type="button" className="btn-close" aria-label="Close" onClick={props.action.bind(this,false)}  >&times;</button>
                <h1>{props.title} User</h1>
                <span></span>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>Name: </label><input type="text" name="name" onChange={handleChange} value={userInfo.name} />
                        <label>Email: </label><input type="email" name="email" onChange={handleChange} value={userInfo.email} />
                        <button className="btn btn-primary mr-2 ml-2" >Submit</button>
                        {/*<button className="btn btn-primary mr-2 ml-2" onClick={props.saveclose.bind(this, false)}>Save & Close</button>
                        <button className="btn btn-primary" onClick={props.savenext.bind(this, true)}>Save & Next</button> */}
                    </form>
                    
                </div>
            </div>
        )
    
}
//export default Add;
