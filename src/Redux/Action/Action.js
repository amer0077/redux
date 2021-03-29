
/////////////// type //////////////

// export const addtodo ='addtodo'
// export const edittodo = 'edittodo'
// export const deletetodo = 'deletetodo'

///////////////////////////////////////////

 import {addtodo , edittodo , deletetodo} from './ActionType'
// newtodo = {text , id}

export const ADDTODO =(newtodo)=>
{
              return {
                type : addtodo ,
                payload : newtodo
              }     
 }


 export const EDITTODO =(edittask)=>
{
              return {
                type : edittodo ,
                payload : edittask
              }
                 
             
 }


 export const DELETETODO =(id)=>
{
              return {
                type : deletetodo ,
                payload : id
              }
                 
             
 }