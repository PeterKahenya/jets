import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { task:this.props.task }
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(){
        this.props.deleteTask(this.state.task)
    }
    render() { 
        console.log("TASK: "+this.state.task.name)
        return ( <div>
            <h4>{this.state.task.name}</h4>
            <h6>{this.state.task.description}</h6>
            <p>{this.state.task.start_time} - {this.state.task.end_time}</p> 
            <button onClick={this.handleDelete} >Delete</button>           
            </div> );
    }
}
 
export default Task;