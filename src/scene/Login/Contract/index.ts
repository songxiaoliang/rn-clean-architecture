export interface ILoginView {
  showLoading: () => void;
  hideLoading: () => void;
}

export interface ILoginPresenter {
  login: () => void;
}

export interface ILoginInteractor {
  login: () => Promise<Boolean>;
}
