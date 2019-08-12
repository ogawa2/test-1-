import React from 'react';


export default class ListItem extends React.Component {
   
   onChangeCheckBox(event) {
      this.props.CompleteTodo(event.target.value);
   // onChangeCheckBox() {       これでも動いた。
   //    this.props.CompleteTodo(this.props.data.id);
   }

   onClickDeleteButton(event) {
      this.props.deleteTodo(this.props.data.id);
   }

   render() {
      return(
         <li className="todo-list-item">
         <input type="checkbox"
           value={this.props.data.id} 
           onChange={this.onChangeCheckBox.bind(this)}/>
         {this.props.data.label}
         <button
           className="delete-button"
           onClick={this.onClickDeleteButton.bind(this)}>x</button>
         </li>
      )
   }
}