import React                        from "react";
import { LinearGradient }           from "expo-linear-gradient";
import { View, StyleSheet, Text,  } from "react-native";
import HeaderLogo                   from "../components/HeaderLogo";
import NotificationsHeaderIcon      from "@/assets/icons/NotificationsHeaderIcon";
import TouchImageScreen             from "@/assets/images/TouchImageScreen";
import NavBarComponent              from "../components/common /NavBarComponent";


const gradientColors = [
  'rgba(180, 0, 45, 0.1)',
  'rgba(180, 0, 45, 0)',
  'rgba(180, 0, 45, 0)',
  'rgba(180, 0, 45, 0.1)',
];


const TouchScreen = () =>{
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.background}
      />
      <HeaderLogo 
      rightIcon={<NotificationsHeaderIcon />}
      />
      <View style={styles.contentContainer}>
        <TouchImageScreen />
        <Text style={styles.regularText}>
          No has recibido todavía ningún Toque, exponte un poco y{' '}
          <Text style={styles.boldTextUnderline}>retoca tu privacidad.</Text>
        </Text>
      </View>
      <View style={styles.navBarContainer}>
        <NavBarComponent />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 34,
    gap: 24,
  },
  regularText: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    color: '#222',
    lineHeight: 24
  },
    boldTextUnderline:{
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    color: '#222',
    lineHeight: 24,
    textDecorationLine: 'underline'
  },
  navBarContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 36
  }
});



export default TouchScreen;