import * as React from 'react';
import { observer } from 'mobx-react';
import { todoState } from './mobx/todoState';
import { TodoInput } from './TodoInput';

@observer
class App extends React.Component<{}> {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>TODO-MOBX</div>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={e => {
            e.preventDefault();
            todoState.addTodo();
          }}
        >
          <TodoInput todoInputState={todoState.todoInput} />
          <button style={{ marginTop: '1rem' }} type="submit">
            ADD TODO
          </button>
          <button
            style={{ marginTop: '1rem' }}
            type="reset"
            onClick={e => {
              todoState.reset();
            }}
          >
            RESET TODO
          </button>
          <ul>
            {todoState.todos.map((todo, i) => (
              <li key={todo.id}>{todo.content}</li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
