import {ILoginInteractor, ILoginPresenter, ILoginView} from '../Contract';

class LoginPresenter implements ILoginPresenter {
  constructor(
    public loginInteractor: ILoginInteractor,
    public viewmodel: ILoginView,
  ) {}

  login = () => {
    this.viewmodel.showLoading();
    this.loginInteractor.login().then(() => {
      this.viewmodel.hideLoading();
    });
  };
}

export default LoginPresenter;
