import React from 'react';
import s from './App.module.css';
import LoginFormApp from './components/LoginFormApp';

const App = () => {
  return (
    <div className={s.wrapper}>
      <LoginFormApp />
    </div>
  );
};

export default App;
