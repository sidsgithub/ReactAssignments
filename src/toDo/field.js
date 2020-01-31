import React from 'react';
import '../App.css'

const Field = (props)=>{
    return(
        <div  key={props.id}>
          <input type="checkbox" onClick={props.check }/>
           <i className = {"line-"+(props.bool ? "hide":"show")}contentEditable={props.value}> {props.content}</i> 
          <button onClick={props.edit}>{props.editName}</button>
          <button onClick={props.delete} onChange={props.changed}>Delete</button>
        </div>
    )
}
export default Field
