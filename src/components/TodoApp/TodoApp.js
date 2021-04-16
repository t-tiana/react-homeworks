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
      allTasks: [],
      uncompletedTasks: [],
      completedTasks: [],
    };
  }

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({
        allTasks: parsedTodos,

        uncompletedTasks: parsedTodos.filter(
          ({ completed }) => completed === false,
        ),

        completedTasks: parsedTodos.filter(
          ({ completed }) => completed === true,
        ),
      });
    } else {
      const newTodo = {
        id: uuidv4(),
        text:
          'Create your own tasks :) You may want to click on this one to edit or just delete it.',
        completed: false,
        edit: false,
      };
      this.setState(({ allTasks }) => ({
        allTasks: [newTodo, ...allTasks],
      }));
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const nextTodos = this.state.allTasks;
    const prevTodos = prevState.allTasks;

    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));

      this.setState(({ allTasks }) => ({
        uncompletedTasks: allTasks.filter(
          ({ completed }) => completed === false,
        ),
        completedTasks: allTasks.filter(({ completed }) => completed === true),
      }));
    }
  }

  saveTask = text => {
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
      edit: false,
    };

    this.setState(({ allTasks }) => ({
      allTasks: [newTodo, ...allTasks],
    }));
  };

  deleteTask = todoId => {
    this.setState(({ allTasks }) => ({
      allTasks: allTasks.filter(({ id }) => id !== todoId),
    }));
  };

  toggleCompleteTask = todoId => {
    this.setState(({ allTasks }) => ({
      allTasks: allTasks.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  handleEdit = todoId => {
    this.setState(({ allTasks }) => ({
      allTasks: allTasks.map(todo =>
        todo.id === todoId ? { ...todo, edit: !todo.edit } : todo,
      ),
    }));
  };

  saveEdit = (text, todoId) => {
    this.setState(({ allTasks }) => ({
      allTasks: allTasks.map(todo =>
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
          allTasks={this.state.allTasks}
          uncompletedTasks={this.state.uncompletedTasks}
          deleteTask={this.deleteTask}
          toggleCompleteTask={this.toggleCompleteTask}
          handleEdit={this.handleEdit}
          saveEdit={this.saveEdit}
        />

        <AddTodo saveTask={this.saveTask} />

        <TodoDone
          allTasks={this.state.allTasks}
          completedTasks={this.state.completedTasks}
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
