import React, { Component } from 'react';
import s from './AddTodo.module.css';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleInputChange = event => {
    this.setState({
      text: event.target.value,
    });
  };
  addTask = () => {
    this.props.saveTask(this.state.text);
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.inputWrapper}>
          <h5 className={s.header}>Task</h5>

          <textarea
            className={s.taskInput}
            placeholder={'What do you need to do?'}
            value={this.state.text}
            onChange={this.handleInputChange}
          />
        </div>
        <div className={s.buttonWrapper}>
          <button className={s.addButton} onClick={this.addTask}>
            Save Item
          </button>
        </div>
      </div>
    );
  }
}

export default AddTodo;
