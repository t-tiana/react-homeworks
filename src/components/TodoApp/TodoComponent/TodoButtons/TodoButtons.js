import React, { Component } from 'react';
import './TodoButtons.scss';
import { BsXSquareFill } from 'react-icons/bs';

class TodoButtons extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  render() {
    const { completed, toggleCompleteTask, deleteTask } = this.props;
    return (
      <>
        <div className="buttons__holder">
          <label className={`${completed}__checkLabel`}>
            <input
              className={`${completed}__checkLabel-check`}
              type="checkbox"
              checked={completed}
              onChange={toggleCompleteTask}
            />
            <span className={`${completed}__checkLabel-checkMark`} />
          </label>
          <button type="button" className="delete" onClick={deleteTask}>
            <BsXSquareFill className="deleteIcon" />
          </button>
        </div>
      </>
    );
  }
}

export default TodoButtons;
