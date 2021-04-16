import React, { Component } from 'react';
import './Edit.scss';
import { GrSave } from 'react-icons/gr';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      todos: props.allTasks,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { allTasks } = props;

    if (allTasks !== state.todos) {
      return (state.todos = props.allTasks);
    }
  }

  handleInputChange = event => {
    this.setState({
      text: event.target.value,
    });
  };

  saveEdit = () => {
    this.props.saveEdit(this.state.text, this.props.id);
  };

  render() {
    const { id } = this.props;
    const { text } = this.state;
    return (
      <>
        <textarea
          className="editInput"
          value={text}
          onChange={this.handleInputChange}
          id={id}
        />
        <div className="saveChangesButton">
          <button type="button" className="saveEdit" onClick={this.saveEdit}>
            <GrSave className="saveEditIcon" />
          </button>
        </div>
      </>
    );
  }
}

export default Edit;
