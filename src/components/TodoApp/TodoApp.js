import s from './TodoApp.module.css';
import TodoDone from './TodoDone';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const TodoApp = () => {
  return (
    <div className={s.wrapper}>
      <TodoList />
      <AddTodo />
      <TodoDone />
    </div>
  );
};

export default TodoApp;
