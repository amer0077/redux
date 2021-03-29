import React,{useState} from 'react';
import {ADDTODO} from '../Redux/Action/Action'
import {connect} from 'react-redux'
import '../App.css'



const AddTodo = ({ADDTODO}) => {
const [text , setText] = useState("")


const clickme =(e)=> {
    e.preventDefault()
    const newtodo ={
        text : text  ,
        id: Math.random()
    }
ADDTODO(newtodo)
setText("")
}



    return (
        <>
            
                
  
  <div id="myDIV" className="header">
   <h2 style={{margin: 5}}>My To Do List</h2>

   <input type="text" id="myInput" placeholder="Title..." required
    value={text}   onChange={(e)=>setText(e.target.value)} />

   <span onClick={clickme} className="addBtn">Add</span>
 
</div>




        </>
    );
}

export default connect(null , {ADDTODO}) (AddTodo);
