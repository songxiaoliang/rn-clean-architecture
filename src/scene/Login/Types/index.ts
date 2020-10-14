import {ILoginPresenter, ILoginView} from '../Contract';

export interface IProps {}

export interface IViewModelProps {
  loginPresenter: (viewModel: ILoginView) => ILoginPresenter;
}
