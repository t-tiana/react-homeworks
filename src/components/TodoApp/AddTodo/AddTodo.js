import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../../redux/actions';
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
    if (this.state.text !== '') {
      this.props.saveTask(this.state.text);
    }
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

const mapDispatchToProps = dispatch => ({
  saveTask: text => {
    if (text !== '') {
      dispatch(actions.saveTask(text));
    }
    return text;
  },
});

export default connect(null, mapDispatchToProps)(AddTodo);
