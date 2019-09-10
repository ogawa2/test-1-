import { todoActionNames, todoActions } from '../actions/todoActions';
import { groupActionNames } from '../actions/groupAction';
import _ from 'lodash';

const todoInitState = {
    todoList: {
      "inbox":  [
                  {id: "item-1", label:"Todo1", completed: false},
                  {id: "item-2", label:"Todo2", completed: false},
                  {id: "item-3", label:"Todo3", completed: false},
                ],
  
      "group-1": [
                  {id: "item-4", label:"Todo4", completed: false},
                  {id: "item-5", label:"Todo5", completed: false},
                  {id: "item-6", label:"Todo6", completed: false}
                ]
    }, 
    todoCount: 6,
  }
  
function todoReducer(state = todoInitState, action) {
    let todoList =[];
    let _state = _.cloneDeep(state);
    switch (action.type) {
      case todoActionNames.ADD_TODO:
           //  _state = Object.assign({}, state); //stateのコピー
          //  _state = _.cloneDeep(state);
           todoList = _state.todoList[action.payload.selectedGroup];
           let todoItem = {
             id: "item-" + _state.todoCount,
             label: action.payload.label,  //label,
             completed: false
           }
           todoList.push(todoItem);
           return _state;
  
      case todoActionNames.COMPLETE_TODO:
           //  _state = Object.assign({}, state); //stateのコピー（シャローコピー）
          //  _state = _.cloneDeep(state); //stateのディープコピー
            todoList = _state.todoList[action.payload.selectedGroup];
           //  _state.todoList[_state.selectedGroup] = _state.todoList[_state.selectedGroup].map((todo) => {
           //    if(todo.id == action.payload.id){
           //      return Object.assign({}, todo, {completed: true})
           //    } else {
           //      return todo;
           //    }
           //  });
           for (let i = 0; i < todoList.length; i++) {
             if(todoList[i].id == action.payload.id) {
               todoList[i].completed = true;
               break;
             }
           }
           return _state;
      
      case todoActionNames.DELETE_TODO:
           //  _state = Object.assign({}, state); //stateのコピー
            // _state = _.cloneDeep(state);
            todoList = _state.todoList[action.payload.selectedGroup];
           for (let i = 0; i < todoList.length; i++) {
             if(todoList[i].id == action.payload.id) {
               todoList.splice(i, 1);
               break;
             }
           } 
           // _state.todoList[_state.selectedGroup] = todoList.slice();
           return _state; 
      case groupActionNames.ADD_GROUP:
           _state.todoList[action.payload.groupId] = [];
           return _state ;
      case groupActionNames.DELETE_GROUP:
        // _state = _.cloneDeep(state);
           delete _state.todoList[action.payload.id];
           return _state;
      default: 
           return state;
    }
  
  }

  export default todoReducer;
  