import React, { Component } from 'react'
import classes from './Qiuz.module.css'

class Qiuz extends Component {
    state = {
        qiuz: []
    }
    
    render() {
       return (
           <div className={classes.Qiuz} >
             <h1>Qiuz</h1>
           </div>
       ) 
    }
}

export default Qiuz