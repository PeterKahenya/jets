import React, { Component } from 'react';

class NewTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name:"",description:"",start_time:"",end_time:"" }
    }

    render() { 
        return ( <div>
            <h3>New Task Form</h3>
            <input type={"text"} placeholder="Task Name" value={this.state.name}/>
            <input type={"text"} placeholder="Description" value={this.state.description}/>
            <input type={"text"} placeholder="Task Start" value={this.state.start_time}/>
            <input type={"text"} placeholder="Task End" value={this.state.end_time}/>
            <button type='button'>Add</button>

        </div> );
    }
}
 
export default NewTaskForm;