import React from 'react';

export default class EditGroupDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groupName: ''
        }
    }
    
    componentWillReceiveProps(nextProps) {
        let _state = Object.assign({}, this.state);
        _state.groupName = nextProps.group ? nextProps.group.label: '';
        this.setState(_state);
    }
    
    onCancel(event) {
        this.props.onCancel();
    }
    onSave(event) {
        // let groupNameInput = this.refs.groupName; //document.getElementById的なやつ
        // this.props.onSave(groupNameInput.value);
        this.props.onSave(this.props.group.id, this.state.groupName);
    }
    onDelete(event) {
        this.props.onDelete(this.props.group.id);
    }
    onChangeGroupName(event) {
        this.setState({
            groupName: event.target.value
        });
    }
    render() {
      if (this.props.show) {
        return(
            <div className= "modal-layer">
                <div className="dialog">
                    <div className="dialog-header">グループ編集</div>
                    <div className="dialog-content">
                        グループ名:
                        <input
                            type="text"
                            name="groupName"
                            className="group-text-input"
                            // value={this.props.group.label}
                            value={this.state.groupName}
                            onChange={this.onChangeGroupName.bind(this)}/>
                    </div>
                    <div className="dialog-footer">
                        <button
                            className="cancel-button"
                            onClick={this.onCancel.bind(this)}>キャンセル</button>
                        <button
                            className="save-button"
                            onClick={this.onSave.bind(this)}>保存</button>
                        <button
                            className="delete-button"
                            onClick={this.onDelete.bind(this)}>削除</button>
                </div>
                </div>
            </div>
        )
      } else {
          return (<div></div>);
      }  
    }
}