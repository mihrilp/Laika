import { RootStackNavigator } from "@/navigation";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#f0f2f5",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
