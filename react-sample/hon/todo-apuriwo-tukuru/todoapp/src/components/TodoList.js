import React from 'react';

class TodoList extends React.Component {
   deleteTodo(i) {
      this.props.del(i);
   }

   render() {
      return (
         <div>
            <h5>Todo LIst</h5>
            <ul>
               {this.props.todos.map((todo,i) => {
                  return(
                     <li key={i}>
                        {todo}
                        <button onClick={this.deleteTodo.bind(this, i)}>
                           削除 
                        </button>
                     </li>
                  )
               })}
            </ul>
         </div>
      );
   }

}

export default TodoList;