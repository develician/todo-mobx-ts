import { observable, action } from 'mobx';
import { Todo } from '../types/todo';
import { TodoInputState } from './todoInputState';

class TodoState {
  @observable
  todos: Todo[] = [];

  @observable
  todoInput = new TodoInputState();

  @action
  addTodo() {
    this.todos.push({
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 0,
      content: this.todoInput.value,
    });
    this.todoInput.onChange('');
  }

  @action
  reset() {
    this.todos = [];
    this.todoInput.onChange('');
  }
}

export const todoState = new TodoState();
