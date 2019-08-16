import React from 'react';

class TodoForm extends React.Component {
   constructor (props) {
      super(props);
      this.state= {
         newTodo: ''
      };
   }
   handleChange(e) {
      this.setState({
         newTodo: e.target.value
      });
   }
   addTodo() {
      if(this.state.newTodo === '') {
         return;
       }
      this.props.add(this.state.newTodo);
      this.setState({
         newTodo: ''
      });
   }
   render() {
      return(
         <div>
            <h3>My Todo</h3>
            <input 
               value={this.state.newTodo}
               onChange={this.handleChange.bind(this)}
               placeholder="Input here..."/>
               <button onClick={this.addTodo.bind(this)}>
                  追加
               </button>
         </div>  
      );
   }
}

export default TodoForm;

