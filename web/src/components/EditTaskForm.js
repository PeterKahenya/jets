import React, { Component } from 'react';

class EditTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name:"",description:"",start_time:"",last_time:"" }
    }
    render() { 
        return ( <div>
            <h3>Edit Task Form</h3>
            <input type={"text"} placeholder="Task Name" value={this.state.name}/>
            
            
            
            </div> );
    }
}
 
export default EditTaskForm;