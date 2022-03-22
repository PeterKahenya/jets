import React, { Component} from "react";
import "./App.css";
import {hot} from "react-hot-loader";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TasksList";

import { Routes, Route, Link, } from "react-router-dom";
const axios = require('axios');


class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      tasks:[],
    }
    this.LoadTasks = this.LoadTasks.bind(this)
    this.AddTask = this.AddTask.bind(this)
    this.DeleteTask = this.DeleteTask.bind(this)


  }
  componentDidMount(){
      this.LoadTasks();
  }

  async LoadTasks(){
    let response = await axios.get("http://localhost:5000/api/tasks/");
    this.setState({tasks:response.data})
  }

  async AddTask(task){
    let response = await axios.post("http://localhost:5000/api/tasks/",{
      name: task.name,
      description: task.description,
      start_time: task.start_time,
      end_time: task.end_time,
    });
    console.log(response.status)
    console.log(response.data)
    this.LoadTasks();
  }

  async DeleteTask(task){
    let response = await axios.delete("http://localhost:5000/api/tasks/"+task._id+"/");
    console.log(response.data)
    this.LoadTasks();
  }




  render(){
    return(
      <div className="App">
        <h1> Welcome Back, to the Jets! </h1>
        <Routes>
          <Route path="/tasks" element={<TaskList tasks={this.state.tasks} DeleteTask={this.DeleteTask} />} />
          <Route path="/tasks/add" element={<NewTaskForm AddTask={this.AddTask}/>} />
        </Routes>
      </div>
    );
  }
}

export default App;