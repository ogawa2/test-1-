//containerには２つ機能がある。１、viewにstoreのstateをﾏｯﾋﾟﾝｸﾞする。
//２、viewから呼び出されるメソッドをマッピングしてそこからアクションをdispatchする。

import { connect } from 'react-redux';
import { todoActions } from '../actions/todoActions';
import MainArea from '../components/mainArea'; //接続したいコンポーネントをimportする。

function getGroupName(groupList,selectedGroup) {
   let groupName = '';
    for (var i = 0; i <groupList.length; i++) {
        if(groupList[i].id == selectedGroup) {
          groupName = groupList[i].label;
          break;
        }
    }
    return groupName;
}

const mapStateToProps = (state) => {  //storeのstateをviewのpropsにマッピングする関数。
   return {//返り値としてpropsに設定する値を返す。
      groupName: getGroupName(state.groupReducer.groupList, state.groupReducer.selectedGroup),
      todoList : state.todoReducer.todoList[state.groupReducer.selectedGroup],
      selectedGroup: state.groupReducer.selectedGroup
   }
}
//次にコンポーネントからpropsを介して呼び出されるfunctionをマッピングする。
const mapDispatchToProps = (dispatch) => {
   return{
      onAddTodo : (label,selectedGroup) => {
                             dispatch(todoActions.addTodo(label,selectedGroup));
                            },
      onCompleteTodo : (id,selectedGroup) => {
                             dispatch(todoActions.completeTodo(id,selectedGroup));
                            },
      onDeleteTodo : (id,selectedGroup) => {
                             dispatch(todoActions.deleteTodo(id,selectedGroup));
                            }
    }
}
//これでコンポーネントからonAddTodoが呼び出されると、addTodoというactionがdispatchされるようになる。
//次にこのcontainerとコンポーネントを接続する。

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(MainArea) //これでreduxと接続したコンポーネントができた。これをcontainerコンポーネントという。