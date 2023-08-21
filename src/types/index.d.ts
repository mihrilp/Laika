export {};

declare global {
  //navigation
  type RootStackParamList = {
    Main: NavigatorScreenParams<BottomBarScreens>;
  };

  type BottomBarScreens = {
    Home: undefined;
    Categories: undefined;
  };
}