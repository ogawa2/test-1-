import { combineReducers } from 'redux';
// import { todoActionNames, todoActions } from '../actions/todoActions';
// import { groupActionNames } from '../actions/groupAction';
import todoReducer from './todoReducer';
import groupReducer from './groupReducer';
import _ from 'lodash';

// const groupInitState = {
//   groupList: [
//     {
//       id: "inbox",
//       label: "受信箱",
//     },
//     {
//       id: "group-1",
//       label: "グループ1",
//     },
//   ],
//   groupCount: 1,
//   selectedGroup: "inbox"
// }

// const todoInitState = {
//   todoList: {
//     "inbox":  [
//                 {id: "item-1", label:"Todo1", completed: false},
//                 {id: "item-2", label:"Todo2", completed: false},
//                 {id: "item-3", label:"Todo3", completed: false},
//               ],

//     "group-1": [
//                 {id: "item-4", label:"Todo4", completed: false},
//                 {id: "item-5", label:"Todo5", completed: false},
//                 {id: "item-6", label:"Todo6", completed: false}
//               ]
//   }, 
//   todoCount: 6,
// }

// // const initialState = { 
// //    groupList: [
// //      {
// //        id: "inbox",
// //        label: "受信箱",
// //      },
// //      {
// //        id: "group-1",
// //        label: "グループ1",
// //      },
// //    ],
// //    todoList: {
// //      "inbox":  [
// //                  {id: "item-1", label:"Todo1", completed: false},
// //                  {id: "item-2", label:"Todo2", completed: false},
// //                  {id: "item-3", label:"Todo3", completed: false},
// //                ],

// //      "group-1": [
// //                  {id: "item-4", label:"Todo4", completed: false},
// //                  {id: "item-5", label:"Todo5", completed: false},
// //                  {id: "item-6", label:"Todo6", completed: false}
// //                ]
// //    }, 
// //    todoCount: 6,
// //    groupCount: 1,
// //    selectedGroup: "inbox"
// //  }

// function todoReducer(state = todoInitState, action) {
//   let todoList =[];
//   let _state = _.cloneDeep(state);
//   switch (action.type) {
//     case todoActionNames.ADD_TODO:
//          //  _state = Object.assign({}, state); //stateのコピー
//         //  _state = _.cloneDeep(state);
//          todoList = _state.todoList[action.payload.selectedGroup];
//          let todoItem = {
//            id: "item-" + _state.todoCount,
//            label: action.payload.label,  //label,
//            completed: false
//          }
//          todoList.push(todoItem);
//          return _state;

//     case todoActionNames.COMPLETE_TODO:
//          //  _state = Object.assign({}, state); //stateのコピー（シャローコピー）
//         //  _state = _.cloneDeep(state); //stateのディープコピー
//           todoList = _state.todoList[action.payload.selectedGroup];
//          //  _state.todoList[_state.selectedGroup] = _state.todoList[_state.selectedGroup].map((todo) => {
//          //    if(todo.id == action.payload.id){
//          //      return Object.assign({}, todo, {completed: true})
//          //    } else {
//          //      return todo;
//          //    }
//          //  });
//          for (let i = 0; i < todoList.length; i++) {
//            if(todoList[i].id == action.payload.id) {
//              todoList[i].completed = true;
//              break;
//            }
//          }
//          return _state;
    
//     case todoActionNames.DELETE_TODO:
//          //  _state = Object.assign({}, state); //stateのコピー
//           // _state = _.cloneDeep(state);
//           todoList = _state.todoList[action.payload.selectedGroup];
//          for (let i = 0; i < todoList.length; i++) {
//            if(todoList[i].id == action.payload.id) {
//              todoList.splice(i, 1);
//              break;
//            }
//          } 
//          // _state.todoList[_state.selectedGroup] = todoList.slice();
//          return _state; 
//     case groupActionNames.ADD_GROUP:
//          _state.todoList[action.payload.groupId] = [];
//          return _state ;
//     case groupActionNames.DELETE_GROUP:
//       // _state = _.cloneDeep(state);
//          delete _state.todoList[action.payload.id];
//          return _state;
//     default: 
//          return state;
//   }

// }

// function groupReducer(state = groupInitState, action) {
//     let todoList =[];
//     let _state = _.cloneDeep(state);
//     switch (action.type) {
//       case groupActionNames.ADD_GROUP:
//           // _state = _.cloneDeep(state);
//           _state.groupCount++;
//           // let groupId = "group-" + _state.groupCount;
//           let groupItem = {
//             id: action.payload.groupId,
//             label: action.payload.data
//           }
//           _state.groupList.push(groupItem);
//           // _state.todoList[groupId] = [];
//           return _state ;
          
//      case groupActionNames.SELECT_GROUP:
//         // _state = _.cloneDeep(state);
//         _state.selectedGroup = action.payload.id;
//         return _state;

//      case groupActionNames.EDIT_GROUP: 
//         // _state = _.cloneDeep(state);
//         for (let i = 0; i < _state.groupList.length; i++) {
//           if(_state.groupList[i].id == action.payload.id) {
//             _state.groupList[i].label = action.payload.groupName;
//             break;
//           } 
//         }
//         return _state;

//      case groupActionNames.DELETE_GROUP:
//         // _state = _.cloneDeep(state);
//         for (let i = 0; i < _state.groupList.length; i++) {
//             if(_state.groupList[i].id == action.payload.id) {
//                 _state.groupList.splice(i, 1);
//                 break;
//             } 
//         }
//         // delete _state.todoList[action.payload.id];
//         if (_state.selectedGroup == action.payload.id) {
//           _state.selectedGroup = "inbox";
//         }
//         return _state;

//      default:
//           return state;

//     }
// }

// // const reducer = (state = initialState, action) => {
// //   let _state = {};
// //   let todoList =[];
//   //  switch (action.type) {
//   //    case todoActionNames.ADD_TODO:
//   //         //  _state = Object.assign({}, state); //stateのコピー
//   //         _state = _.cloneDeep(state);
//   //         todoList = _state.todoList[_state.selectedGroup];
//   //         let todoItem = {
//   //           id: "item-" + _state.todoCount,
//   //           label: action.payload.data,  //label,
//   //           completed: false
//   //         }
//   //         todoList.push(todoItem);
//   //         return _state;

//   //    case todoActionNames.COMPLETE_TODO:
//   //         //  _state = Object.assign({}, state); //stateのコピー（シャローコピー）
//   //         _state = _.cloneDeep(state); //stateのディープコピー
//   //          todoList = _state.todoList[_state.selectedGroup];
//   //         //  _state.todoList[_state.selectedGroup] = _state.todoList[_state.selectedGroup].map((todo) => {
//   //         //    if(todo.id == action.payload.id){
//   //         //      return Object.assign({}, todo, {completed: true})
//   //         //    } else {
//   //         //      return todo;
//   //         //    }
//   //         //  });
//   //         for (let i = 0; i < todoList.length; i++) {
//   //           if(todoList[i].id == action.payload.id) {
//   //             todoList[i].completed = true;
//   //             break;
//   //           }
//   //         }
//   //         return _state;
     
//   //    case todoActionNames.DELETE_TODO:
//   //         //  _state = Object.assign({}, state); //stateのコピー
//   //          _state = _.cloneDeep(state);
//   //          todoList = _state.todoList[_state.selectedGroup];
//   //         for (let i = 0; i < todoList.length; i++) {
//   //           if(todoList[i].id == action.payload.id) {
//   //             todoList.splice(i, 1);
//   //             break;
//   //           }
//   //         } 
//   //         // _state.todoList[_state.selectedGroup] = todoList.slice();
//   //         return _state; 
          
//     //  case groupActionNames.ADD_GROUP:
//     //       _state = _.cloneDeep(state);
//     //       _state.groupCount++;
//     //       let groupId = "group-" + _state.groupCount;
//     //       let groupItem = {
//     //         id: groupId,
//     //         label: action.payload.data
//     //       }
//     //       _state.groupList.push(groupItem);
//     //       _state.todoList[groupId] = [];
//     //       return _state ;
          
//     //  case groupActionNames.SELECT_GROUP:
//     //     _state = _.cloneDeep(state);
//     //     _state.selectedGroup = action.payload.id;
//     //     return _state;

//     //  case groupActionNames.EDIT_GROUP: 
//     //     _state = _.cloneDeep(state);
//     //     for (let i = 0; i < _state.groupList.length; i++) {
//     //       if(_state.groupList[i].id == action.payload.id) {
//     //         _state.groupList[i].label = action.payload.groupName;
//     //         break;
//     //       } 
//     //     }
//     //     return _state;

//     //  case groupActionNames.DELETE_GROUP:
//     //     _state = _.cloneDeep(state);
//     //     for (let i = 0; i < _state.groupList.length; i++) {
//     //         if(_state.groupList[i].id == action.payload.id) {
//     //             _state.groupList.splice(i, 1);
//     //             break;
//     //         } 
//     //     }
//     //     delete _state.todoList[action.payload.id];
//     //     if (_state.selectedGroup == action.payload.id) {
//     //       _state.selectedGroup = "inbox";
//     //     }
//     //     return _state;

//     //  default:
//     //       return state;
//   //  }
// // }
  
const reducer = combineReducers({
  todoReducer,
  groupReducer
})

export default reducer;