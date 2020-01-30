import React from 'react';

const Todo = (props)=>{
    return(
        <div><h1>To Do..</h1>
            <div>
                <input id = "todoinput" type = "text" placeholder="what to do ??" onChange={props.changed}/>
                <input onClick = {props.submit} type ="submit" value = "submit"/>
            </div>
            <br></br>
        </div>
    );
}

export default Todo;