import React from 'react';
import {connect} from 'react-redux'
import {DELETETODO} from '../Redux/Action/Action'
import Edit from './Edit'
import '../App.css'
import { Button} from 'react-bootstrap';


const TodoCard = ({todo , DELETETODO}) => {


    // {
    //     // Add a "checked" symbol when clicking on a list item
    //     var list = document.querySelector('ul');
    //     list.addEventListener('click', function(ev) {
    //       if (ev.target.tagName === 'LI') {
    //         ev.target.classList.toggle('checked');
    //       }
    //     }, false);
        
        
    //     }

   const myFunction=()=> {
        var checkBox = document.getElementById("myCheck");
        var text = document.getElementById("text");
        if (checkBox.checked === true){
            text.style.backgroundColor ="#888"
        } else {
        text.style.backgroundColor ="#eee"
        }
      }

    return (
        <div  >
              
      <div>
  

</div>

       
           <span className="menu">
        
        </span>         
            <ul id="myUL" style={{margin:'0px'}}>
                     <li id="text">
                    
                        <span className="momo"  >
                      
                        {todo.text} 
                        
                        
                         </span>
                         <span className="check" >
                     <input type="checkbox" id="myCheck" onClick={myFunction}  />
                     </span> 
                 <span  className="mi">
                   <span>
                  
                   </span>
                         <span >
                         <Edit todo={todo}/>
                         </span>
                         {" "}
                         <span>
                         <Button variant="danger" onClick={()=>DELETETODO(todo.id)} 
                         className="button" type="button" data-hover="Del"   data-active="I'M ACTIVE"
                          > <span>✖️</span></Button>


                         </span>
                        
                 </span>
                        </li>
                      
              
                  
                   

                    
                    
                      </ul>
       
            
            
      
                     
        </div>
    );
}

export default connect(null , {DELETETODO}) (TodoCard);
