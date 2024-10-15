import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CustomInputComponent from "../components/common /CustomInputComponent";
import CurrentPositionIcon from "@/assets/icons/CurrentPositionIcon";
import FilterIcon from "@/assets/icons/FilterIcon";
import NotificationsIcon from "@/assets/icons/NotificationsIcon";
import DropdownComponent from "../components/DropdownComponent";
import NavBarComponent from "../components/common /NavBarComponent";
import { LinearGradient } from "expo-linear-gradient";
import ItemBTNearMe from "../components/common /ItemBTNearMe";
import PartyModeIcon from "@/assets/icons/PartyModeIcon";
import RomanceModeIcon from "@/assets/icons/RomanceModeIcon";
import ActiveAvatarIcon from "@/assets/icons/OnLineAvatarIcon";
import MessageIcon from "@/assets/icons/MessageIcon";



const gradientColors = [
  'rgba(180, 0, 45, 0.1)',
  'rgba(180, 0, 45, 0)',
  'rgba(180, 0, 45, 0)',
  'rgba(180, 0, 45, 0.1)',
];

type People = {
  id: number;
  name: string;
  mode: string;
  touched: boolean;
  touchMatch: boolean;
  image: any;
  latitude: number;
  longitude: number;
  onLine: boolean;
  edad: number;
  mensajeNuevo: boolean;
};

const people: People[] = [
  { id: 1, name: 'Ana', mode: 'fire', touched: false, touchMatch: false, image: require('../../assets/images/image.png'), latitude: 39.4676562, longitude: -0.3924242, onLine: true, edad: 25, mensajeNuevo: true },
  { id: 2, name: 'Ben', mode: 'heart', touched: true, touchMatch: false, image: require('../../assets/images/image1.png'), latitude: 39.4496562, longitude: -0.3954242, onLine: false, edad: 30, mensajeNuevo: true },
  { id: 3, name: 'Carla', mode: 'fire', touched: false, touchMatch: true, image: require('../../assets/images/image2.png'), latitude: 39.4426562, longitude: -0.3984242, onLine: true, edad: 27, mensajeNuevo: false },
  { id: 4, name: 'David', mode: 'heart', touched: true, touchMatch: false, image: require('../../assets/images/image3.png'), latitude: 39.4376562, longitude: -0.3714242, onLine: false, edad: 32, mensajeNuevo: true },
  { id: 5, name: 'Eva', mode: 'fire', touched: true, touchMatch: false, image: require('../../assets/images/image4.png'), latitude: 39.4626562, longitude: -0.4034242, onLine: true, edad: 24, mensajeNuevo: false },
  { id: 6, name: 'Franco', mode: 'heart', touched: false, touchMatch: false, image: require('../../assets/images/image5.png'), latitude: 39.436562, longitude: -0.4054242, onLine: false, edad: 29, mensajeNuevo: true },
  { id: 7, name: 'Gina', mode: 'fire', touched: false, touchMatch: true, image: require('../../assets/images/image1.png'), latitude: 39.456562, longitude: -0.3774242, onLine: true, edad: 28, mensajeNuevo: false },
  { id: 8, name: 'Harry', mode: 'heart', touched: true, touchMatch: false, image: require('../../assets/images/image2.png'), latitude: 39.4226562, longitude: -0.3824242, onLine: false, edad: 35, mensajeNuevo: true },
  { id: 9, name: 'Irene', mode: 'fire', touched: false, touchMatch: true, image: require('../../assets/images/image3.png'), latitude: 39.4426562, longitude: -0.4024242, onLine: true, edad: 31, mensajeNuevo: false },
  { id: 10, name: 'Jack', mode: 'heart', touched: true, touchMatch: false, image: require('../../assets/images/image4.png'), latitude: 39.4626562, longitude: -0.3874242, onLine: false, edad: 22, mensajeNuevo: true },
  { id: 11, name: 'Kathy', mode: 'fire', touched: true, touchMatch: false, image: require('../../assets/images/image5.png'), latitude: 39.4326562, longitude: -0.3924242, onLine: true, edad: 26, mensajeNuevo: false },
  { id: 12, name: 'Leo', mode: 'heart', touched: false, touchMatch: true, image: require('../../assets/images/image.png'), latitude: 39.4676562, longitude: -0.3954242, onLine: false, edad: 33, mensajeNuevo: true },
  { id: 13, name: 'Mona', mode: 'fire', touched: false, touchMatch: false, image: require('../../assets/images/image1.png'), latitude: 39.4476562, longitude: -0.3984242, onLine: true, edad: 24, mensajeNuevo: false },
  { id: 14, name: 'Nina', mode: 'heart', touched: true, touchMatch: false, image: require('../../assets/images/image2.png'), latitude: 39.4376562, longitude: -0.3714242, onLine: false, edad: 27, mensajeNuevo: true },
  { id: 15, name: 'Oscar', mode: 'fire', touched: true, touchMatch: false, image: require('../../assets/images/image3.png'), latitude: 39.4626562, longitude: -0.4034242, onLine: true, edad: 29, mensajeNuevo: false },
  { id: 16, name: 'Paula', mode: 'heart', touched: false, touchMatch: true, image: require('../../assets/images/image4.png'), latitude: 39.436562, longitude: -0.4054242, onLine: false, edad: 21, mensajeNuevo: true },
  { id: 17, name: 'Quentin', mode: 'fire', touched: false, touchMatch: true, image: require('../../assets/images/image5.png'), latitude: 39.456562, longitude: -0.3774242, onLine: true, edad: 28, mensajeNuevo: false },
  { id: 18, name: 'Rita', mode: 'heart', touched: true, touchMatch: false, image: require('../../assets/images/image.png'), latitude: 39.4226562, longitude: -0.3824242, onLine: false, edad: 34, mensajeNuevo: true },
  { id: 19, name: 'Steve', mode: 'fire', touched: false, touchMatch: true, image: require('../../assets/images/image1.png'), latitude: 39.4426562, longitude: -0.4024242, onLine: true, edad: 30, mensajeNuevo: false },
  { id: 20, name: 'Tina', mode: 'heart', touched: true, touchMatch: false, image: require('../../assets/images/image2.png'), latitude: 39.4626562, longitude: -0.3874242, onLine: false, edad: 25, mensajeNuevo: true }
];

const NearMeBTListScreen = () => {
  const renderItem = ({ item }: { item: People }) => {
    const borderColor = item.mode === 'fire' ? 'rgba(255, 193, 7, 0.2)' : 'rgba(220, 53, 69, 0.2)';
    const modeIcon = item.mode === 'fire' 
      ? <PartyModeIcon />  
      : <RomanceModeIcon />
    const onLineIcon = item.onLine ? <ActiveAvatarIcon /> : undefined;
    const messageIcon = item.mensajeNuevo ? <MessageIcon /> : undefined;

    return (
      <ItemBTNearMe
        borderColor={borderColor}
        profileImage={item.image}
        modeIcon={modeIcon}
        onLineIcon={onLineIcon}
        messageIcon={messageIcon}
        name={item.name}
        age={item.edad}
      />
    );
  };

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
              onRightIconPress={() => {}}
            />
          </View>
          <View style={styles.notificationIconContainer}>
            <NotificationsIcon />
          </View>
        </View>
        <DropdownComponent />
      </View>

      <FlatList
        data={people}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        horizontal={false}
      />

      <View style={styles.navBarContainer}>
        <NavBarComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  listContent: {
    paddingVertical: 8,
  },
  navBarContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    justifyContent: 'flex-end',
  },
});

export default NearMeBTListScreen;