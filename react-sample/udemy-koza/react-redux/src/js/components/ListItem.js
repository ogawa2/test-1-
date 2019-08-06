import React from 'react';

export default class ListItem extends React.Component {
   render() {
      return(
         <li className="todo-list-item">{this.props.data.label}</li>
      )
   }
}