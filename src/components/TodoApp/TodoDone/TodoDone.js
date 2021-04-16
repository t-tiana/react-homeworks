import React, { Component } from 'react';
import s from './TodoDone.module.css';
import TodoComponent from '../TodoComponent';

const TodoDone = props => {
  const {
    completedTasks,
    toggleCompleteTask,
    deleteTask,
    handleEdit,
    allTasks,
    saveEdit,
  } = props;

  const DONE = completedTasks;
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
                allTasks={allTasks}
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
};

export default TodoDone;
