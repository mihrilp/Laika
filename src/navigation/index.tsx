import Categories from "@/screens/Categories";
import Home from "@/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootStackNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Categories" component={Categories} />
    </RootStack.Navigator>
  );
}
