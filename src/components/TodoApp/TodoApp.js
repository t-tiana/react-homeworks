import React, { Component } from 'react';
import s from './TodoApp.module.css';
import TodoDone from './TodoDone';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { v4 as uuidv4 } from 'uuid';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      text: '',
    };
  }

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    } else {
      const newTodo = {
        id: uuidv4(),
        text:
          'Create your own tasks :) You may want to click on this one to edit or just delete it.',
        completed: false,
        edit: false,
      };
      this.setState(({ todos }) => ({
        todos: [newTodo, ...todos],
      }));
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }
  }

  saveTask = text => {
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
      edit: false,
    };

    this.setState(({ todos }) => ({
      todos: [...todos, newTodo],
    }));
  };

  deleteTask = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.filter(({ id }) => id !== todoId),
    }));
  };

  toggleCompleteTask = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  handleEdit = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, edit: !todo.edit } : todo,
      ),
    }));
  };

  saveEdit = (text, todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId
          ? { ...todo, text: text !== '' ? text : todo.text, edit: !todo.edit }
          : todo,
      ),
    }));
  };

  render() {
    return (
      <div className={s.wrapper}>
        <TodoList
          globalTodos={this.state.todos}
          deleteTask={this.deleteTask}
          toggleCompleteTask={this.toggleCompleteTask}
          handleEdit={this.handleEdit}
          saveEdit={this.saveEdit}
        />

        <AddTodo saveTask={this.saveTask} />

        <TodoDone
          globalTodos={this.state.todos}
          deleteTask={this.deleteTask}
          toggleCompleteTask={this.toggleCompleteTask}
          handleEdit={this.handleEdit}
          saveEdit={this.saveEdit}
        />
      </div>
    );
  }
}

export default TodoApp;
