import {observable, action} from 'mobx';

class LoginStore {
  @observable loginResult: string = '';
  @observable isLoading: boolean = false;

  @action
  setLoginResult = (value: string) => {
    this.loginResult = value;
  };

  @action
  setIsLoading = (bool: boolean) => {
    this.isLoading = bool;
  };
}
export {LoginStore};
