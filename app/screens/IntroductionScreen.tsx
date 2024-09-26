import HeaderLogo           from "@/App/components/HeaderLogo";
import React                from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient }   from 'expo-linear-gradient';
import Carousel             from "@/App/components/Carousel";


const gradientColors = [
  'rgba(180, 0, 45, 0.1)',
  'rgba(180, 0, 45, 0)',
  'rgba(180, 0, 45, 0)',
  'rgba(180, 0, 45, 0.1)',
];


const IntroductionScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.background}
      />
      <HeaderLogo />
      <Carousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default IntroductionScreen;
