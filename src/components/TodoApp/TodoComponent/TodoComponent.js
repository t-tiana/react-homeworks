import React, { Component } from 'react';
import './TodoComponent.scss';
import Edit from './Edit';
import TodoButtons from './TodoButtons';

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.globalTodos,
      edit: '',
      taskId: props.id,
      text: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { id, globalTodos } = props;
    const getEditState = globalTodos
      .map(todo => todo.id === id && todo.edit === true)
      .filter(taskToEdit => taskToEdit === true)
      .toString();

    const getBooleanEdit = getEditState => {
      switch (getEditState) {
        case '':
          return false;
        case 'true':
          return true;
        default:
          return false;
      }
    };

    if (globalTodos !== state.todos) {
      return (
        (state.todos = globalTodos), (state.edit = getBooleanEdit(getEditState))
      );
    }
  }

  componentDidMount() {
    const { id, globalTodos } = this.props;
    const getEditState = globalTodos
      .map(todo => todo.id === id && todo.edit === true)
      .filter(taskToEdit => taskToEdit === true)
      .toString();

    const getBooleanEdit = getEditState => {
      switch (getEditState) {
        case '':
          return false;
        case 'true':
          return true;
        default:
          return false;
      }
    };

    this.setState(() => ({
      edit: getBooleanEdit(getEditState),
    }));
  }

  render() {
    const {
      id,
      text,
      completed,
      toggleCompleteTask,
      deleteTask,
      handleEdit,
      saveEdit,
      globalTodos,
    } = this.props;

    let toggleEditMode;

    if (this.state.edit) {
      toggleEditMode = (
        <Edit
          text={text}
          id={id}
          saveEdit={saveEdit}
          globalTodos={globalTodos}
        />
      );
    } else {
      toggleEditMode = (
        <TodoButtons
          completed={completed}
          toggleCompleteTask={() => toggleCompleteTask(id)}
          deleteTask={() => deleteTask(id)}
        />
      );
    }

    return (
      <div
        className={
          this.state.edit
            ? `${this.state.edit}__editModeLiWrapper`
            : `${completed}__liWrapper`
        }
      >
        <span
          className="taskText"
          style={{ display: this.state.edit ? 'none' : 'block' }}
          onClick={() => handleEdit(id)}
        >
          {text}
        </span>

        {toggleEditMode}
      </div>
    );
  }
}

export default TodoComponent;
