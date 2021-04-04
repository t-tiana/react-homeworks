import React, { Component } from 'react';
import s from './TodoDone.module.css';
import TodoComponent from '../TodoComponent';

class TodoDone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.globalTodos !== state.todos) {
      return (state.todos = props.globalTodos.filter(
        ({ completed }) => completed === true,
      ));
    }
  }

  render() {
    const DONE = this.state.todos;
    const {
      toggleCompleteTask,
      deleteTask,
      handleEdit,
      handleEditInputChange,
      globalTodos,
      saveEdit,
    } = this.props;
    if (DONE.length > 0 && DONE !== 'undefined') {
      return (
        <div className={s.wrapper}>
          <div className={s.line} />
          <h1 className={s.header}>Done:</h1>
          <ul className={s.done}>
            {DONE.map(({ id, text, completed }) => (
              <li key={id}>
                <TodoComponent
                  text={text}
                  completed={completed}
                  toggleCompleteTask={toggleCompleteTask}
                  deleteTask={deleteTask}
                  filteredTasks={DONE}
                  id={id}
                  handleEdit={handleEdit}
                  handleEditInputChange={handleEditInputChange}
                  globalTodos={globalTodos}
                  saveEdit={saveEdit}
                />
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return '';
    }
  }
}

export default TodoDone;
