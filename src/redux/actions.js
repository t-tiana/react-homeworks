import types from './action-types';
import { v4 as uuidv4 } from 'uuid';

const saveTask = text => ({
  type: types.SAVE,
  payload: {
    id: uuidv4(),
    text,
    completed: false,
    edit: false,
  },
});

const deleteTask = todoId => ({
  type: types.DELETE,
  payload: todoId,
});

const toggleCompleteTask = todoId => ({
  type: types.TOGGLE_COMPLETE,
  payload: todoId,
});

const enableEditMode = todoId => ({
  type: types.ENABLE_EDIT_MODE,
  payload: todoId,
});

const saveEdit = (todoId, text) => ({
  type: types.SAVE_EDIT,
  payload: {
    id: todoId,
    text: text,
  },
});

export default {
  saveTask,
  deleteTask,
  toggleCompleteTask,
  enableEditMode,
  saveEdit,
};
