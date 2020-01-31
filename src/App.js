import React, { Component } from 'react';
// import {useState} from 'react';
import './App.css';
// import Persons from './Person/Persons'
import Todo from './toDo/toDo'
import Field from './toDo/field'

// const App = props => {
//   //returns an array with exactly teo elements 
//   //1st element = current state
//   //2nd element = function to update state 
//   const [personsState, setPersonsState ] = useState({
//     Persons: [{ name: "siddharth", age: 23 }],

//   });

//   const [otheresState, setOthersState ]= useState({
//     otherState: 'some other value'
//   })
//    console.log(personsState,otheresState);
//   const switchNameHandler = () => {
//         setPersonsState({
//           Persons:[
//             {
//             name:"agra",
//             age:300
//           }
//         ]
//         });
//       }
//   //render is not used here.
//   return (
//     <div className="App">
//       <Person name={personsState.Persons[0].name} age={personsState.Persons[0].age}>my hobby is sleeping.</Person>
//       <button onClick={switchNameHandler}>switch</button>
//     </div>

//   )

// }


// class based components

// class App extends Component {

//   constructor(props){
//     super(props);
//     console.log("[app.js] constructor");
//     this.state = {
//       Persons: [
//         { id:1,name: "hululu", age: 20 },
//         { id:2,name: "hulu", age: 10 },
//         { id:3,name: "hul", age: 5 }],
//       showPersons: false
//     }
//   }
//   static getDerivedStateFromProps(props,state){
//     console.log("[App.js] getdrivedStateFromProps");
//     return state;
//   }
//   componentDidMount(){
//     console.log("[App.js] componentDidMount ");
//   }
  
//   switchNameHandler = (name) => {
//     this.setState({
//       Persons: [{
//         name,
//         age: 30
//       },
//       {
//         name: "sid",
//         age: 4
//       }, {
//         name: "ishaan",
//         age: 6
//       }
//       ]
//     })
//   }

//   toggleNameHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow });
//   }

//   deleteNameHandler=(personIndex)=>{
//     const newPerson = [...this.state.Persons]
//     newPerson.splice(personIndex,1)
//     this.setState({ Persons: newPerson })
//   }

//   nameChangeHandler = (event,id) => {
//     const personIndex = this.state.Persons.findIndex(p=>{
//       return p.id === id;
//     })
//     const person = { ...this.state.Persons[personIndex]};
//     //or 
//     //const person = Object.assign({},this.state.Persons[personIndex])
//     person.name = event.target.value;
//     const persons = [...this.state.Persons]
//     persons[personIndex] = person
//     this.setState({
//       Persons: persons

//     })

//   }


//   render() {
//     console.log("[App.js render]");
//     let persons = null;

//     if (this.state.showPersons) {

//       persons = (
//         <div>
//           {/* <Persons
//           click={()=>this.deleteNameHandler(index)}
//           change={(event)=>this.nameChangeHandler(event,person.id)}
//           ></Persons> */}
//           {
//           this.state.Persons.map((person,index) => {
//             return (
//               <Persons name={person.name}
//               age={person.age}
//               key={person.id}
//               click={()=>this.deleteNameHandler(index)}
//               changed= {(event)=>this.nameChangeHandler(event,person.id)}></Persons>
//               )
//           }
//           )
//           }
//         </div>
//       )
//     }

//     return (

//       <div className="App">
//         <button onClick={this.toggleNameHandler} >show/hide</button >
//         {persons}
//       </div>
//     );
//   }
// }
class App extends Component {

  state = {
    data: [],
    value:[]
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

      const newValues = [...this.state.value]
      newValues.push({bool:true})
      this.setState({value:newValues})
      document.getElementById("todoinput").value = ""
    }
    else {
      alert("Enter some task first")
    }
    console.log(this.state)
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
    // console.log(this.state)
  }
  checkHandler = (value,index)=>{
    
    let newVAL = [...this.state.value]
    // console.log(newVAL)
    // console.log(index+""+value)
    value = !value
    newVAL[index].bool = value
    // console.log(newVAL)
    // console.log(index+""+value)
    // this.setState(this.state.value[index].bool : !value)
    // console.log(value,index)
    this.setState({value:newVAL})
    console.log(this.state.value[index].bool)
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
              check={()=>this.checkHandler(this.state.value[index].bool,index)}
              bool={this.state.value[index].bool}
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