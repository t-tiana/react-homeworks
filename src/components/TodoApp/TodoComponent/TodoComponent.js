import { connect } from 'react-redux';
import actions from '../../../redux/actions';
import './TodoComponent.scss';
import Edit from './Edit';
import TodoButtons from './TodoButtons';

const TodoComponent = props => {
  const {
    id,
    text,
    completed,
    toggleCompleteTask,
    deleteTask,
    enableEditMode,
    allTasks,
  } = props;

  let toggleEditMode;

  const edit = allTasks
    .map(todo => todo.id === id && todo.edit === true)
    .filter(taskToEdit => taskToEdit === true)
    .toString();

  if (edit) {
    toggleEditMode = <Edit text={text} id={id} />;
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
        edit ? `${edit}__editModeLiWrapper` : `${completed}__liWrapper`
      }
    >
      <span
        className="taskText"
        style={{ display: edit ? 'none' : 'block' }}
        onClick={() => enableEditMode(id)}
      >
        {text}
      </span>

      {toggleEditMode}
    </div>
  );
};

const mapStateToProps = state => ({
  allTasks: state.allTasks,
});

const mapDispatchToProps = dispatch => ({
  deleteTask: id => dispatch(actions.deleteTask(id)),
  toggleCompleteTask: id => dispatch(actions.toggleCompleteTask(id)),
  enableEditMode: id => dispatch(actions.enableEditMode(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
