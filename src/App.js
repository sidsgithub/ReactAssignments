import React, { Component } from 'react';
import './App.css';
import Todo from './toDo/toDo'
import Field from './toDo/field'

class App extends Component {

  state = {
    data: []
  }
//to generate date and set it to the state 
  generateDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    return (`${mm}/${dd}/${yyyy}`);
  }
//to get the value and set it to the state
  submitHandler = (data) => {
    if (data) {
      const newItems = [...this.state.data]
      newItems.push({ id: Math.floor(Math.random() * 200) + 1, 
                      content: data, 
                      date: this.generateDate(),
                      value:false })
      this.setState({ data: newItems })
      document.getElementById("todoinput").value = ""
    }
    else {
      alert("Enter some task first")
    }
  }
//to delete an element
  deleteHandler = (dataIndex) => {
    const copyData = [...this.state.data]
    copyData.splice(dataIndex, 1)
    this.setState({ data: copyData })
  }
//to edit an element
  editHandler = (dataIndex) => {
    const copyData = [...this.state.data]
    copyData[dataIndex].value =true
    this.setState({data:copyData})
  }

  render() {
    let items = null;
    let todo = null;

//conditional rendering on the data value
    if (this.state.data.length > 0) {
      items = (
        this.state.data.map((somedata, index) => {
          return (
            <Field key={somedata.id}
              editName={"edit"}
              content={this.state.data[index].content}
              value = {this.state.data[index].value}
              edit={() => this.editHandler(index)}
              delete={() => this.deleteHandler(index)}
            ></Field>
          );
        })
      )
    }
    todo = (
      <Todo submit={() => this.submitHandler(document.getElementById("todoinput").value)}>
      </Todo>
    )

    return (
      <div className="App">
        {todo}
        {items}
      </div>

    );
  }
}

export default App;