import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ILoginPresenter, ILoginView} from '../Contract';
import {IViewModelProps} from '../Types';

export default class LoginPage
  extends Component<IViewModelProps>
  implements ILoginView {
  loginPresenter: ILoginPresenter;
  constructor(props: IViewModelProps) {
    super(props);
    this.loginPresenter = props.loginPresenter(this);
  }

  showLoading = () => {
    console.log('显示Loading');
  };

  hideLoading = () => {
    console.log('隐藏Loading');
  };

  /**
   * 登录
   * @memberof LoginPage
   */
  onLoginBtnPress = () => {
    this.loginPresenter.login();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.onLoginBtnPress}>登录</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
