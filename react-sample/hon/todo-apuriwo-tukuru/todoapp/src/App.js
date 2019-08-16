// import React,　{ component } from 'react';
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

addTodo(newTodo) {
  const todos = this.state.todos;
  todos.push(newTodo);
  this.setState({
    todos: todos,
  });
}

deleteTodo(i) {
  const todos = this.state.todos;
  todos.splice(i, 1);
  this.setState({
    todos: todos
  });
}


render() {
  return(
    <div>
      <TodoForm add={this.addTodo.bind(this)}/>
      <TodoList todos={this.state.todos} del={this.deleteTodo.bind(this)}/>
    </div>
  );
}
}
export default App;
