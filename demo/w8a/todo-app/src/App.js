import React from 'react';
import './App.css';
import todoList from './todoList.json'

// FIlter the list based on a checkbox
// Add an input form to allow creating TODO items with content & priority
// Have each item be able to remove itself using a function passed in from the parent


function TodoItem(props) {
  return <p className = 'card' onClick={() => props.removeTask(props.id)}>{props.content}</p>
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList,
      hideCompletedItems: false
    }
    this.currentID = 4;
  }

  addTask(e) {
    console.log(this.refs.taskContent)
    let todoList = this.state.todoList
    todoList.push(
      {"id": this.currentID, "completed": true, "priority": 2, "content": this.refs.taskContent.value})
    this.currentID++
    this.setState({todoList})
  }

  removeTask(id) {
    console.log(id)
    let todoList = this.state.todoList
    console.log(todoList)
    todoList = todoList.filter((v) => v.id !== id)
    console.log(todoList)
    this.setState({todoList})
  }

  render () {
    console.log(todoList)
    return (
      <>
      <br />
      <input type ="text" ref = "taskContent" />
      <input type = "button" value ="AddTask" onClick = {(e) => this.addTask(e)} />
      <br /><br />
      <input ref = "hideCompletedItemsCheckbox" type = "checkbox" id = "hideCompletedItems"
      name = "hideCompletedItems" value = "hideCompletedItems"
      onChange = {(e) => this.setState({hideCompletedItems: e.target.checked})} />
      <label htmlFor = "hideCompletedItems">I have a bike</label><br></br>
      { ((this.state.hideCompletedItems) ? this.state.todoList
        .filter((v) => !v.completed) : this.state.todoList)
        .map((v) => <TodoItem id = {v.id} removeTask = {(id) => this.removeTask(id)}
          key = {v.id} content = {v.content}
          priority = {v.priority} 
          completed = {v.completed} />)}
      </>)
  }
}

function App() {
  return (
    <TodoList />
  )
}

export default App;
