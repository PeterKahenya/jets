import React, { Component } from 'react';
import { Navigate } from "react-router-dom";

class NewTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name:"",description:"",start_time:"",end_time:"", taskAdded:false    }
        this.AddTask = this.AddTask.bind(this)
    }

    AddTask(e){
        this.props.AddTask(this.state)
        this.setState({ name:"",description:"",start_time:"",end_time:"",taskAdded:true })

    }

    render() { 
        return ( <div>
            <h3>New Task Form</h3>
            {this.state.taskAdded && (
                <Navigate to="/tasks" replace={true} />
            )}
            <input type={"text"} placeholder="Task Name" value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
            <input type={"text"} placeholder="Description" value={this.state.description} onChange={e=>this.setState({description:e.target.value})}/>
            <input type={"text"} placeholder="Task Start" value={this.state.start_time} onChange={e=>this.setState({start_time:e.target.value})}/>
            <input type={"text"} placeholder="Task End" value={this.state.end_time}onChange={e=>this.setState({end_time:e.target.value})}/>
            <button type='button' onClick={this.AddTask}>Add</button>
        </div> );
    }
}
 
export default NewTaskForm;