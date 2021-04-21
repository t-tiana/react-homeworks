import { connect } from 'react-redux';
import './TodoList.scss';
import TodoComponent from '../TodoComponent';

const TodoList = props => {
  const { uncompletedTasks } = props;

  return (
    <>
      <h1 className="header">To do:</h1>
      <ul className="task">
        {uncompletedTasks.map(({ id, text, completed }) => (
          <li key={id}>
            <TodoComponent id={id} text={text} completed={completed} />
          </li>
        ))}
      </ul>
      <div className={'line'} />
    </>
  );
};

const mapStateToProps = state => ({
  uncompletedTasks: state.allTasks.filter(
    ({ completed }) => completed === false,
  ),
});

export default connect(mapStateToProps, null)(TodoList);
