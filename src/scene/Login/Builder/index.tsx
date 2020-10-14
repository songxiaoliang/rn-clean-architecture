import React, {Component} from 'react';
import {ILoginInteractor, ILoginPresenter, ILoginView} from '../Contract';
import LoginInteractor from '../Interactor';
import LoginPresenter from '../Presenter';
import {IProps} from '../Types';
import LoginPage from '../ViewModel';

export default class LoginBuilder extends Component<IProps> {
  mPresenter: (viewmodel: ILoginView) => ILoginPresenter;
  VM: JSX.Element;

  constructor(props) {
    super(props);
    const interactor: ILoginInteractor = this.buildInteractor();
    this.mPresenter = this.buildPresenter(interactor);
    this.VM = this.buildViewModel(this.mPresenter);
  }

  buildInteractor = () => {
    return new LoginInteractor();
  };

  buildPresenter = (loginInteractor: ILoginInteractor) => (
    viewmodel: ILoginView,
  ): ILoginPresenter => {
    return new LoginPresenter(loginInteractor, viewmodel);
  };

  buildViewModel(loginPresenter: (viewModel: ILoginView) => ILoginPresenter) {
    return <LoginPage loginPresenter={loginPresenter} />;
  }

  render() {
    return this.VM;
  }
}
