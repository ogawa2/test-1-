import React from 'react';
import Header from './header';
import Footer from './footer';
import ListItem from './ListItem';

export default class MainArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInputValue: ""
    }
  }
  
  onChangeTodoInput(event) {
     this.setState({todoInputValue: event.target.value});
  }

  onClickAddButton(event) {
    this.setState({todoInputValue: ""});
    this.props.onAddTodo(this.state.todoInputValue);
  }

  onCompleteTodo(id) {
    this.props.onCompleteTodo(id);
  } 

  onDeleteTodo(id){
    this.props.onDeleteTodo(id);
  }

  renderTodoItems() {
    let todoItemDom = [];
    for (let i = 0; i < this.props.todoList.length; i++) {
     if(!this.props.todoList[i].completed) {
       let todoItem = <ListItem
                         data={this.props.todoList[i]}
                         key={"item-"+i}
                         CompleteTodo={this.onCompleteTodo.bind(this)}
                         deleteTodo={this.onDeleteTodo.bind(this)}/>
       todoItemDom.push(todoItem);
       }
    }
    return todoItemDom;
  }
  
  
  render() {
     return (
       <div className="main-area">
         <Header
          groupName={this.props.groupName}/>
         <main className="list-area">
            <div className='todo-input-area'>
              <input type="text"
                     className="todo-input" 
                     placeholder="todoを追加"
                     value={this.state.todoInputValue}
                     onChange={this.onChangeTodoInput.bind(this)}/>
                    {/* // onChange={() => {this.props.onChange(event.target.value)}}/> */}
              <button 
                     className="add-button"
                     onClick={this.onClickAddButton.bind(this)}>登録</button>
            </div>
            <ul className="todo-list">
               {this.renderTodoItems()}
            </ul>
         </main>
         <Footer />
       </div>
     )
   }
 }
 