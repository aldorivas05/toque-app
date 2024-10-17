import React, { useEffect }           from 'react';
import { NavigationContainer }        from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen              from 'expo-splash-screen'; 
import IntroductionScreen             from './App/screens/IntroductionScreen';
import NearMeMapScreen                from './App/screens/NearMeMapScreen';
import { RootStackParams }            from './App/types';
import { 
  useFonts, 
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold }                     from '@expo-google-fonts/inter';
import FilterScreen from './App/screens/FilterScreen';
import CustomHeader from './App/components/common /CustomHeader';
import NearMeScreen from './App/screens/NearMeScreen';
import NearMeBTListScreen from './App/screens/NearMeBTListScreen';
import TouchScreen from './App/screens/TouchScreen';
import ProfileScreen from './App/screens/ProfileScreen';
import ChatsScreen from './App/screens/ChatsScreen';
import ChatDetailsScreen from './App/screens/ChatDetailsScreen';
import ChatDetailsHeader from './App/components/ChatDetailsHeader';


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
        <Stack.Screen 
          name="NearMeBTListScreen"
          component={NearMeBTListScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="NearMeMapScreen"
          component={NearMeMapScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="TouchScreen"
          component={TouchScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ProfileScreen"
          component={ProfileScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ChatsScreen"
          component={ChatsScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ChatDetailsScreen" 
          component={ChatDetailsScreen} 
          options={{ header: () => <ChatDetailsHeader /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
