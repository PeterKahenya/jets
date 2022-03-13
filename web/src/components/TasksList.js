import React, { Component } from 'react';
import Task from './Task';
const axios = require('axios');


class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks:[] }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/tasks/").then(response=>{
            this.setState({tasks:response.data})
        })
        
    }
    render() { 
        return ( <div>
            <h3>Task List</h3>
            {this.state.tasks.map(task=><div key={task._id}>
                <Task task={task} />
                <hr/>
                </div>)}
        </div> );
    }
}
 
export default TaskList;