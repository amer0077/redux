import {addtodo , edittodo , deletetodo} from '../Action/ActionType'

const intialstate ={
    todo :  [
        {id : 0 , text : "go Home"},
        {id : 1 , text :'go school'}
    ]
}




const reducer = (state=intialstate , action ) => {
  switch (action.type)
  {
      case addtodo : 
      return {
          ...state , todo : [...state.todo , action.payload ]}

      case edittodo :
       return {
   ...state , todo : state.todo.map(el=> el.id === action.payload.id ? action.payload : el)}

   case deletetodo : 
   return {
       ...state , todo : state.todo.filter (el => el.id !== action.payload )
   }
   default :
  return state
  }
  
}

export default reducer;
