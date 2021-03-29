import React from 'react';
import TodoCard from './TodoCard'
import  {connect} from 'react-redux'

const TodoList = ({todolist}) => {
    return (
        <div>
            {
                todolist.map(el=> 
                   <TodoCard key={el.id}  todo={el}     />)
            }
         
        </div>

    );
}


const mapStateToProps =(state)=> {
    return {
        todolist : state.todo
    }
}

export default connect(mapStateToProps)(TodoList);
