import React, { Component } from 'react';
import './TodoList.scss';
import TodoComponent from '../TodoComponent';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.globalTodos !== state.todos) {
      return (state.todos = props.globalTodos.filter(
        ({ completed }) => completed === false,
      ));
    }
  }

  render() {
    const UNDONE = this.state.todos;
    const {
      toggleCompleteTask,
      deleteTask,
      handleEdit,
      handleEditInputChange,
      globalTodos,
      saveEdit,
    } = this.props;

    return (
      <>
        <h1 className="header">To do:</h1>
        <ul className="task">
          {UNDONE.map(({ id, text, completed }) => (
            <li key={id}>
              <TodoComponent
                text={text}
                completed={completed}
                toggleCompleteTask={toggleCompleteTask}
                deleteTask={deleteTask}
                filteredTasks={UNDONE}
                id={id}
                globalTodos={globalTodos}
                handleEdit={handleEdit}
                handleEditInputChange={handleEditInputChange}
                saveEdit={saveEdit}
              />
            </li>
          ))}
        </ul>
        <div className={'line'} />
      </>
    );
  }
}

export default TodoList;
