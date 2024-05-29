import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Component/MyTabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNav from './Component/StackNav';



export default function App() {
  return (
    <GestureHandlerRootView>

    <NavigationContainer>
      {/* <MyTabs /> */}
      <StackNav />
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}
