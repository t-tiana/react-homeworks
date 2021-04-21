import { connect } from 'react-redux';
import s from './TodoDone.module.css';
import TodoComponent from '../TodoComponent';

const TodoDone = props => {
  const { completedTasks } = props;

  if (completedTasks.length > 0 && completedTasks !== 'undefined') {
    return (
      <div className={s.wrapper}>
        <div className={s.line} />
        <h1 className={s.header}>Done:</h1>
        <ul className={s.done}>
          {completedTasks.map(({ id, text, completed }) => (
            <li key={id}>
              <TodoComponent id={id} text={text} completed={completed} />
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return '';
  }
};

const mapStateToProps = state => ({
  completedTasks: state.allTasks.filter(({ completed }) => completed === true),
});

export default connect(mapStateToProps, null)(TodoDone);
