import React from 'react';

export default class AddGroupDialog extends React.Component {
    onCancel(event) {
        this.props.onCancel();
    }
    onSave(event) {
        let groupNameInput = this.refs.groupName; //document.getElementById的なやつ
        this.props.onSave(groupNameInput.value);
    }
    render() {
      if (this.props.show) {
        return(
            <div className= "modal-layer">
                <div className="dialog">
                    <div className="dialog-header">グループ新規作成</div>
                    <div className="dialog-content">
                        グループ名:
                        <input
                            ref="groupName"
                            type="text"
                            name="groupName"
                            className="group-text-input"/>
                    </div>
                    <div className="dialog-footer">
                        <button
                            className="cancel-button"
                            onClick={this.onCancel.bind(this)}>キャンセル</button>
                        <button
                            className="save-button"
                            onClick={this.onSave.bind(this)}>保存</button>
                    </div>
                </div>
            </div>
        )
      } else {
          return (<div></div>);
      }  
    }
}