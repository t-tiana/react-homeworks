import React from 'react';
import s from './App.module.css';
import TodoApp from './components/TodoApp';

const App = () => {
  return (
    <div className={s.wrapper}>
      <TodoApp />
    </div>
  );
};

export default App;
