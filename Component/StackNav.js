import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'; import MyTabs from './MyTabs';
import Learn from "./Learn";
const Stack = createStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator  >
      <Stack.Screen options={{
        headerShown: false,
      }} name="Login" component={Login} />

      <Stack.Screen options={{
        headerShown: false,
      }} name="Home" component={MyTabs} />
    </Stack.Navigator>
  );
}
export default StackNav