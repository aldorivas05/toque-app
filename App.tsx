import React                          from 'react';
import { NavigationContainer }        from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroductionScreen             from './App/screens/IntroductionScreen';
import NearMeScreen                   from './App/screens/NearMeScreen';
import { RootStackParams }            from './App/types';



const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Introduction">
        <Stack.Screen 
          name="Introduction" 
          component={IntroductionScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="NearMeScreen" 
          component={NearMeScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
