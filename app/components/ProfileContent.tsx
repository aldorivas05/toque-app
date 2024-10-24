import React                   from "react";
import CurrentModeDropdown     from "./common /CurrentModeDropdown";
import InputProfileContent     from "./common /InputProfileContent";
import PhotoGridProfileContent from "./PhotoGridProfileContent";
import { LinearGradient }      from 'expo-linear-gradient';
import NavBarComponent         from "../components/common /NavBarComponent";
import { View, StyleSheet, Text, ScrollView } from "react-native";

const gradientColors = [
  '#F6F6F6',
  'rgba(246, 246, 246, 0.00)'
];

const photos = [
  { id: 1, image: require('../../assets/images/profile3.png') },
  { id: 2, image: require('../../assets/images/profile3.png') },
];

const ProfileContent = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.currentModeContainer}>
          <Text style={styles.currentModeTitle}>Modo actual</Text>
          <Text style={styles.currentModeText}>Indica tu estado de ánimo o de relacionarte en estos momentos.</Text>
          <View style={styles.dropdownContainer}>
            <CurrentModeDropdown />
          </View>
        </View>
        <View style={styles.presentationContainer}>
          <Text style={styles.presentationTitle}>Presentación</Text>
          <Text style={styles.presentationText}>Escribe una intro divertida y contundente.</Text>
          <InputProfileContent 
            placeholder="Un poco sobre ti..." 
          />
        </View>
        
        <View style={styles.photoContainer}>
          <Text style={styles.photoTitle}>Mi fotos</Text>
          <PhotoGridProfileContent photos={photos} />
        </View>
      </ScrollView>

      <View style={styles.navBarContainer}>
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0.2 }}
          style={styles.background}
        />
        <NavBarComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFF',
  },
  scrollViewContainer: {
    flex: 1,
  },
  currentModeContainer: {
    width: '100%',
  },
  currentModeTitle: {
    color: '#B4002D',
    fontSize: 17,
    fontFamily: 'Inter_600SemiBold',
    paddingBottom: 16,
    paddingHorizontal: 24
  },
  currentModeText: {
    color: '#777',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Inter_400Regular',
    paddingBottom: 16,
    paddingHorizontal: 24
  },
  dropdownContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 40,
    paddingHorizontal: 24
  },
  presentationContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40
  },
  presentationTitle: {
    color: '#B4002D',
    fontSize: 17,
    fontFamily: 'Inter_600SemiBold',
    paddingBottom: 16
  },
  presentationText: {
    color: '#777',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Inter_400Regular',
    paddingBottom: 16
  },
  photoContainer: {
    paddingHorizontal: 24,
  },
  photoTitle: {
    color: '#B4002D',
    fontSize: 17,
    fontFamily: 'Inter_600SemiBold',
    paddingBottom: 16
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  navBarContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
});

export default ProfileContent;