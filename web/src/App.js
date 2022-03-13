import React, { Component} from "react";
import "./App.css";
import {hot} from "react-hot-loader";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TasksList";


class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Welcome Back, Jets! </h1>
        <NewTaskForm/>
        <TaskList/>
      </div>
    );
  }
}

export default hot(module)(App);