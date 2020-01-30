import React from 'react';

const Field = (props)=>{
    return(
        <div  key={props.id}>
          <input type="checkbox" />
           <i contentEditable={props.value}>{props.content}</i> 
          <button onClick={props.edit}>{props.editName}</button>
          <button onClick={props.delete} onChange={props.changed}>Delete</button>
        </div>
    )
}
export default Field
