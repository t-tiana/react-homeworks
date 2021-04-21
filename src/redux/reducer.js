import { combineReducers } from 'redux';
import types from './action-types';
import { v4 as uuidv4 } from 'uuid';

const initialState = () => {
  if (localStorage['allTasks']) {
    return JSON.parse(localStorage['allTasks']);
  } else {
    return [
      {
        id: uuidv4(),
        text:
          'Create your own tasks :) You may want to click on this one to edit or just delete it.',
        completed: false,
        edit: false,
      },
    ];
  }
};

const allTasks = (state = initialState(), { type, payload }) => {
  switch (type) {
    case types.SAVE:
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    case types.TOGGLE_COMPLETE:
      return state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
      );

    case types.ENABLE_EDIT_MODE:
      return state.map(todo =>
        todo.id === payload ? { ...todo, edit: !todo.edit } : todo,
      );

    case types.SAVE_EDIT:
      return state.map(todo =>
        todo.id === payload.id
          ? { ...todo, text: payload.text, edit: !todo.edit }
          : todo,
      );

    default:
      return state;
  }
};

export default combineReducers({
  allTasks,
});
