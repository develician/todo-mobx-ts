import * as React from 'react';
import { TodoInputState } from './mobx/todoInputState';
import { observer } from 'mobx-react';

@observer
export class TodoInput extends React.Component<{
  todoInputState: TodoInputState;
}> {
  render() {
    return (
      <input
        type="text"
        value={this.props.todoInputState.value}
        onChange={e => this.props.todoInputState.onChange(e.target.value)}
      />
    );
  }
}
