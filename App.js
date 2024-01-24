const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Vendor from "./screens/Vendor";
import Splash from "./screens/Splash";
import CreateAndEditTask from "./screens/CreateAndEditTask";
import Profile from "./screens/Profile";
import WorkSummary from "./screens/WorkSummary";
import Task from "./screens/Task";
import Login from "./screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Vendor"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Vendor"
              component={Vendor}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAndEditTask"
              component={CreateAndEditTask}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WorkSummary"
              component={WorkSummary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Task"
              component={Task}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splash />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
