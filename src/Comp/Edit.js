import React,{useState} from 'react';
import Modal  from 'react-bootstrap/Modal'
import { Button} from 'react-bootstrap';
import { EDITTODO } from '../Redux/Action/Action';
import {connect} from 'react-redux'

          
          const Edit = ({todo , EDITTODO}) => {

            const [show, setShow] = useState(false);

            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);


const [text , setText] = useState(todo.text)


const editme =(e)=>{
    e.preventDefault()
    const newtext ={
        ...todo , text : text
    }
   
       
     EDITTODO(newtext)
    
    setShow(false)
    console.log(newtext)
}
console.log(todo.text)



           return (

          <>
         

           <Button variant="info" onClick={handleShow} className="button" type="button" data-hover="Edit"
            data-active="I'M ACTIVE">
           <span>✎</span>
      </Button>
   
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <div className="form-group">
 
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    value={text} 
    onChange={(e)=>setText(e.target.value)} />
  <small id="emailHelp" className="form-text text-muted">Edit your task and click save.</small>
</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"   onClick={editme}>
           Save
          </Button>
         
        </Modal.Footer>
      </Modal>



          

         </>
           )
          }
          
export default connect(null , {EDITTODO})(Edit);
