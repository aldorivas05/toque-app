import React                          from 'react';
import { NavigationContainer }        from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroSlider                    from './App/screens/IntroductionScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen 
          name="Intro" 
          component={IntroSlider} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}