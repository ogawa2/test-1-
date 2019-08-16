// import React,　{ component } from 'react';
import React from 'react';

// class Rei1 extends React.Component {
//   render(){
//     return 'こんちは';
//   }
// }

class Rei1 extends React.Component {
  // return props.todos;
  deleteTodo2(i) {
    console.log(i);
    return (
     (i) => { this.props.deleteTodo();}
    )
  }
  
  render() {
    return (
      this.props.todos.map((todo, i) => {
        return(
          <li key={i}>
            {todo}{i}
            <button onClick={() => {this.deleteTodo2(i);}}>
            消去
            </button>
          </li>
        );
      })
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo:''
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
  const todos = this.state.todos;
  todos.push(this.state.newTodo);
  this.setState({
    todos: todos,
    newTodo:''
  });
}

deleteTodo(id) {
  console.log("おっす");
  console.log(id);
  const todos = this.state.todos;
  todos.splice(id, 1);
  this.setState({
    todos: todos
  });
}


render() {
  return(
    <div>
    <h3>My Todo</h3>
    <input
      value={this.state.newTodo}
      onChange={this.handleChange.bind(this)}
      placeholder= "Input here..." 
    />
    <button onClick={this.addTodo.bind(this)}>
    追加
    </button>

    <h5>Todo List</h5>
    <ul>
      {
        this.state.todos.map((todo, i) => {
          return(
            <li key={i}>
              {todo}
              <button onClick={this.deleteTodo.bind(this,i)}>
              消去
              </button>
            </li>
          );
        })
      }
    </ul>
    </div>
  );
}
}
export default App;
