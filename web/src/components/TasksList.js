import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Task from './Task';
const axios = require('axios');


class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {is_deleted:false }
        this.deleteTask = this.deleteTask.bind(this)
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    
    async deleteTask(task){
        this.props.DeleteTask(task)
    }
    
    render() { 
        return ( <div>
            <Link to="/tasks/add">Add Task</Link>
            <h3>Task List</h3>
            
            {this.props.tasks.map(task=><div key={task._id}>
                <Task task={task} deleteTask={this.deleteTask} />
                <hr/>
                </div>)}
        </div> );
    }
}
 
export default TaskList;