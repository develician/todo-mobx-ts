import { todoState } from '../mobx/todoState';

beforeEach(() => {
  todoState.reset();
});

test('Store a list of todos', () => {
  expect(todoState.todos).toEqual([]);
});

test('change todo input test', () => {
  expect(todoState.todoInput.value).toEqual('');

  todoState.todoInput.onChange('Learn VueJS');
  expect(todoState.todoInput.value).toEqual('Learn VueJS');

  todoState.todoInput.onChange('Learn ReactNative');
  expect(todoState.todoInput.value).toEqual('Learn ReactNative');
});

test('add todo', () => {
  todoState.todoInput.onChange('Learn JavaScript');
  todoState.addTodo();

  expect(todoState.todos).toEqual([
    {
      id: 0,
      content: 'Learn JavaScript',
    },
  ]);
});

test('reset todos', () => {
  todoState.reset();

  expect(todoState.todos).toEqual([]);
  expect(todoState.todoInput.value).toEqual('');
});
