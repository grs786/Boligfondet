import ChangePassword from '../containers/auth/change-password';
import Dashboard from '../containers/Dashboard';
import ForgotPassword from '../containers/auth/forgot-password';
import {Loader} from '../components';
import Login from '../containers/auth/Login';
import Signup1 from '../containers/auth/Signup1';
import Signup2 from '../containers/auth/Signup2';
import Signup3 from '../containers/auth/Signup3';
import Welcome from '../containers/Welcome';
import LoginSecurity from '../containers/auth/login-security';
import GetStarted from '../containers/auth/getStarted';
import { Invester, InvesterBuy, MineEllendommer, InvesterTab } from '../containers/invester'

export default {
  ChangePassword: {screen: ChangePassword},
  Dashboard: {screen: Dashboard},
  ForgotPassword: {screen: ForgotPassword},
  Loader: {screen: Loader},
  Login: {screen: Login},
  Signup1: {screen: Signup1},
  Signup2: {screen: Signup2},
  Signup3: {screen: Signup3},
  Welcome: {screen: Welcome},
  LoginSecurity: {screen: LoginSecurity},
  GetStarted: {screen: GetStarted},
  Invester: {screen: Invester},
  InvesterBuy: {screen: InvesterBuy},
  MineEllendommer: { screen: MineEllendommer },
  InvesterTab: { screen: InvesterTab}
};
