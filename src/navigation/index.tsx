import Categories from "@/screens/Categories";
import Home from "@/screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Icons from "@/icons";
import colors from "@/styles/colors";

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomBarScreens>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        tabBarIconStyle: {
          width: 25,
          height: 25,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Icons.Paw color={color} />,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ color }) => <Icons.Folder color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export function RootStackNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="Main" component={TabNavigator} />
    </RootStack.Navigator>
  );
}
