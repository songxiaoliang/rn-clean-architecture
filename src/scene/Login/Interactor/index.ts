import {ILoginInteractor} from '../Contract';

export default class LoginInteractor implements ILoginInteractor {
  login = (): Promise<Boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };
}
