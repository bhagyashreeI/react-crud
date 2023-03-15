import React, {Component} from 'react';
import classes from './Control.css';

import Hoc from './../../hoc/Hoc';

const control = (props) => {
    return (
      <Hoc>
        <button className={classes.button}>Add</button>
        <button>Refresh</button>
      </Hoc>
    );
}


export default control;