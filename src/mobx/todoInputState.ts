import { observable, action } from 'mobx';

export class TodoInputState {
  @observable
  value = '';

  @action
  onChange(value: string) {
    console.log(value);
    this.value = value;
  }
}
