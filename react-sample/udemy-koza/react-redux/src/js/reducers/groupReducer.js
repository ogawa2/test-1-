import { groupActionNames } from '../actions/groupAction';
import _ from 'lodash';

const groupInitState = {
  groupList: [
    {
      id: "inbox",
      label: "受信箱",
    },
    {
      id: "group-1",
      label: "グループ1",
    },
  ],
  groupCount: 1,
  selectedGroup: "inbox"
}

function groupReducer(state = groupInitState, action) {
    let todoList =[];
    let _state = _.cloneDeep(state);
    switch (action.type) {
      case groupActionNames.ADD_GROUP:
          // _state = _.cloneDeep(state);
          _state.groupCount++;
          // let groupId = "group-" + _state.groupCount;
          let groupItem = {
            id: action.payload.groupId,
            label: action.payload.data
          }
          _state.groupList.push(groupItem);
          // _state.todoList[groupId] = [];
          return _state ;
          
     case groupActionNames.SELECT_GROUP:
        // _state = _.cloneDeep(state);
        _state.selectedGroup = action.payload.id;
        return _state;

     case groupActionNames.EDIT_GROUP: 
        // _state = _.cloneDeep(state);
        for (let i = 0; i < _state.groupList.length; i++) {
          if(_state.groupList[i].id == action.payload.id) {
            _state.groupList[i].label = action.payload.groupName;
            break;
          } 
        }
        return _state;

     case groupActionNames.DELETE_GROUP:
        // _state = _.cloneDeep(state);
        for (let i = 0; i < _state.groupList.length; i++) {
            if(_state.groupList[i].id == action.payload.id) {
                _state.groupList.splice(i, 1);
                break;
            } 
        }
        // delete _state.todoList[action.payload.id];
        if (_state.selectedGroup == action.payload.id) {
          _state.selectedGroup = "inbox";
        }
        return _state;

     default:
          return state;

    }
}
export default groupReducer;