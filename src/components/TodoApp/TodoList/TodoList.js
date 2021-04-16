import React, { Component } from 'react';
import './TodoList.scss';
import TodoComponent from '../TodoComponent';

const TodoList = props => {
  const {
    toggleCompleteTask,
    deleteTask,
    handleEdit,
    allTasks,
    saveEdit,
    uncompletedTasks,
  } = props;

  const UNDONE = uncompletedTasks;

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
              allTasks={allTasks}
              handleEdit={handleEdit}
              saveEdit={saveEdit}
            />
          </li>
        ))}
      </ul>
      <div className={'line'} />
    </>
  );
};

export default TodoList;
