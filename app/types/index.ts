export type RootStackParams = {
  Introduction: undefined;
  NearMeScreen: undefined;
  MapScreen: undefined;
  FilterScreen: undefined;
  NearMeBTListScreen: undefined;
  NearMeMapScreen: undefined;
  TouchScreen: undefined;
  ProfileScreen: undefined;
  ChatsScreen: undefined;
  ChatDetailsScreen: undefined;
  LoginScreen: undefined;
  RegistrationScreen: undefined;
  PasswordRecoveryScreen:  undefined;
}

export type  ButtonComponentProps = {
  title: string;
  color: string;
  iconName?: string;
  onPress: any;
  icon?: React.ReactNode;
  borderColor?: string;
  textColor?: string;
}
