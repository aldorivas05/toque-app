import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import CustomInputComponent from "../components/common /CustomInputComponent";
import CurrentPositionIcon from "@/assets/icons/CurrentPositionIcon";
import FilterIcon from "@/assets/icons/FilterIcon";
import NotificationsIcon from "@/assets/icons/NotificationsIcon";
import DropdownComponent from "../components/DropdownComponent";
import NavBarComponent from "../components/common /NavBarComponent";
import { LinearGradient } from "expo-linear-gradient";
import FilterScreenButton from "../components/common /FilterButton";
import NearMeOptionsImage from "@/assets/images/NearMeOptionsImage";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from "../types";


const gradientColors = [
  'rgba(180, 0, 45, 0.1)',
  'rgba(180, 0, 45, 0)',
  'rgba(180, 0, 45, 0)',
  'rgba(180, 0, 45, 0.1)',
];


const NearMeScreen = () => {
  function handleRightIconPress(): void {
    throw new Error("Function not implemented.");
  }
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.background}
      />
      <View style={styles.componentSection}>
        <View style={styles.inputContainer}>
          <View style={styles.customInputWrapper}>
            <CustomInputComponent 
              leftIcon={<CurrentPositionIcon />}
              rightIcon={<FilterIcon />}
              onRightIconPress={handleRightIconPress}
            />
          </View>
          <View style={styles.notificationIconContainer}>
            <NotificationsIcon />
          </View>
        </View>
        <DropdownComponent />
      </View>
      <View style={styles.contentSection}>
        {/* <Image
          source={require('../../assets/images/near-me-options-image.png')}
          style={styles.image}
        /> */}
        <NearMeOptionsImage />
        <Text style={styles.regularText}>
          No podemos acceder al mapa, por favor activa los{' '}
          <Text style={styles.boldText}>permisos para...</Text>
        </Text>
        <View style={styles.buttonSection}>
          <FilterScreenButton
            backgroundColor="#B4002D"
            textColor="#FFF"
            text="Bluethoot"
            hasBorder={true}
            onPress={() => navigation.navigate('NearMeBTListScreen')}
          />
          <FilterScreenButton
            backgroundColor="#B4002D"
            textColor="#FFF"
            text="Ubicación"
            hasBorder={true}
            onPress={() => navigation.navigate('NearMeMapScreen')}
          />
        </View>
      </View>
      <View style={styles.navBarContainer}>
        <NavBarComponent />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  componentSection: {
    width: '100%',
    height: 193,
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    paddingBottom: 12,
    top: 0,
    gap: 8,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  customInputWrapper: {
    flex: 1,
  },
  notificationIconContainer: {
    width: 24, 
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  contentSection: {
    flex: 1,
    paddingHorizontal: 44,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  image: {
    width: 168,
    height: 168,
  },
  regularText: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    color: '#222'
  },
  boldText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    color: '#222'
  },
  buttonSection: {
    paddingHorizontal: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  navBarContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    justifyContent: 'flex-end'
  }
});


export default NearMeScreen;