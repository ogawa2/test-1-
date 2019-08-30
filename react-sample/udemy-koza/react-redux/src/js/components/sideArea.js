import React from 'react';
import ReactDOM from 'react-dom';
import AddGroupDialog from './addGroupDialog';

export default class SideArea extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      showAddGroupDialog: false,
    }
  }

  onClickGroup(id) {
    this.props.onSelect(id);
  } 

  onClickAddGroup(event) {
    this.setState({showAddGroupDialog: true});
  }

  onSaveAddGroupDialog() {
    this.setState({showAddGroupDialog: false});
  }

  onCancelAddGroupDialog() {
    this.setState({showAddGroupDialog: false});
  }

  renderGroup() {
    let groupListDom = [];
    for (let i = 0; i < this.props.groupList.length; i++) {
      let group = this.props.groupList[i];
      let groupItem = <li key={group.id}
                          onClick={() => {this.onClickGroup(group.id)}}>
                          {group.label}
                      </li>;
      groupListDom.push(groupItem);
    }
    return groupListDom;
  }

   render() {
     return (
       <div className="side-area">
         <ul className="group-List">
           {this.renderGroup()}
         </ul>
         <div className="side-area-footer">
        <button
          onClick={this.onClickAddGroup.bind(this)}>グループ新規作成</button>
         </div>
         <AddGroupDialog
            show={this.state.showAddGroupDialog}
            onSave={this.onSaveAddGroupDialog.bind(this)}
            onCancel={this.onCancelAddGroupDialog.bind(this)}/>
       </div>
     )
   }
 }
   