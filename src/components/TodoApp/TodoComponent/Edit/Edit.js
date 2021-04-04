import React, { Component } from 'react';
import './Edit.scss';
import { GrSave } from 'react-icons/gr';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      todos: props.globalTodos,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { globalTodos } = props;

    if (globalTodos !== state.todos) {
      return (state.todos = props.globalTodos);
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
    const { id, text } = this.props;
    return (
      <>
        <textarea
          className="editInput"
          value={this.state.text}
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
