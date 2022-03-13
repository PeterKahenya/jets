import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { task:this.props.task }
    }
    render() { 
        console.log("TASK: "+this.state.task.name)
        return ( <div>
            <h4>{this.state.task.name}</h4>
            <h6>{this.state.task.name}</h6>
            <p>{this.state.task.start_time} - {this.state.task.end_time}</p>            
            </div> );
    }
}
 
export default Task;