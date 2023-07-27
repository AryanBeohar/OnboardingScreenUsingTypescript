import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  OnBoarding1,
  OnBoarding2,
  OnBoarding3,
  OnBoarding4,
  OnBoarding5,
  OnBoarding6,
  OnBoarding7,
} from './src/screens';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding1"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
        <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
        <Stack.Screen name="OnBoarding4" component={OnBoarding4} />
        <Stack.Screen name="OnBoarding5" component={OnBoarding5} />
        <Stack.Screen name="OnBoarding6" component={OnBoarding6} />
        <Stack.Screen name="OnBoarding7" component={OnBoarding7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
