import React, { useEffect }           from 'react';
import { NavigationContainer }        from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen              from 'expo-splash-screen'; 
import IntroductionScreen             from './App/screens/IntroductionScreen';
import NearMeScreen                   from './App/screens/NearMeScreen';
import { RootStackParams }            from './App/types';
import { 
  useFonts, 
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold }                     from '@expo-google-fonts/inter';
import FilterScreen from './App/screens/FilterScreen';
import CustomHeader from './App/components/common /CustomHeader';


SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

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
        <Stack.Screen 
          name="FilterScreen" 
          component={FilterScreen} 
          options={{ header: () => <CustomHeader /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
