import PersonInputIcon from "@/assets/icons/PersonInputIcon";
import SearchInputIcon from "@/assets/icons/SearchInputIcon";
import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import CustomInputComponent from "../components/common /CustomInputComponent";
import NotificationsIcon from "@/assets/icons/NotificationsIcon";
import NavBarComponent from "../components/common /NavBarComponent";
import ChatItemComponent from "../components/common /ChatItemComponent";
import PartyModeIcon from "@/assets/icons/PartyModeIcon";
import RomanceModeIcon from "@/assets/icons/RomanceModeIcon";
import ActiveAvatarIcon from "@/assets/icons/OnLineAvatarIcon";



type People = {
  id: number;
  name: string;
  mode: string;
  image: any;
  onLine: boolean;
  edad: number;
  mensajeNuevo: boolean;
  mensajeCorto: string;
};

const people: People[] = [
  { id: 1, name: 'Ana', mode: 'fire', image: require('../../assets/images/image.png'), onLine: true, edad: 25, mensajeNuevo: true, mensajeCorto: "Hola, ¿cómo estás?, sabes que el otro dia te vi por ahi" },
  { id: 2, name: 'Ben', mode: 'heart', image: require('../../assets/images/image1.png'), onLine: false, edad: 30, mensajeNuevo: true, mensajeCorto: "Buenas tardes" },
  { id: 3, name: 'Carla', mode: 'fire', image: require('../../assets/images/image2.png'), onLine: true, edad: 27, mensajeNuevo: false, mensajeCorto: "¿Qué tal?, sabes que el otro dia" },
  { id: 4, name: 'David', mode: 'heart', image: require('../../assets/images/image3.png'), onLine: false, edad: 32, mensajeNuevo: true, mensajeCorto: "Hola" },
  { id: 5, name: 'Eva', mode: 'fire', image: require('../../assets/images/image4.png'), onLine: true, edad: 24, mensajeNuevo: false, mensajeCorto: "¿Cómo te va?" },
  { id: 6, name: 'Franco', mode: 'heart', image: require('../../assets/images/image5.png'), onLine: false, edad: 29, mensajeNuevo: true, mensajeCorto: "¡Saludos!" },
  { id: 7, name: 'Gina', mode: 'fire', image: require('../../assets/images/image1.png'), onLine: true, edad: 28, mensajeNuevo: false, mensajeCorto: "Buen día" },
  { id: 8, name: 'Harry', mode: 'heart', image: require('../../assets/images/image2.png'), onLine: false, edad: 35, mensajeNuevo: true, mensajeCorto: "¡Hola!" },
  { id: 9, name: 'Irene', mode: 'fire', image: require('../../assets/images/image3.png'), onLine: true, edad: 31, mensajeNuevo: false, mensajeCorto: "¿Cómo has estado?" },
  { id: 10, name: 'Jack', mode: 'heart', image: require('../../assets/images/image4.png'), onLine: false, edad: 22, mensajeNuevo: true, mensajeCorto: "¡Hola, amigo!" },
  { id: 11, name: 'Kathy', mode: 'fire', image: require('../../assets/images/image5.png'), onLine: true, edad: 26, mensajeNuevo: false, mensajeCorto: "Buenas" },
  { id: 12, name: 'Leo', mode: 'heart', image: require('../../assets/images/image.png'), onLine: false, edad: 33, mensajeNuevo: true, mensajeCorto: "¡Qué hay!" },
  { id: 13, name: 'Mona', mode: 'fire', image: require('../../assets/images/image1.png'), onLine: true, edad: 24, mensajeNuevo: false, mensajeCorto: "Hola de nuevo" },
  { id: 14, name: 'Nina', mode: 'heart', image: require('../../assets/images/image2.png'), onLine: false, edad: 27, mensajeNuevo: true, mensajeCorto: "¿Qué pasa?" },
  { id: 15, name: 'Oscar', mode: 'fire', image: require('../../assets/images/image3.png'), onLine: true, edad: 29, mensajeNuevo: false, mensajeCorto: "¡Hola, hola!" },
  { id: 16, name: 'Paula', mode: 'heart', image: require('../../assets/images/image4.png'), onLine: false, edad: 21, mensajeNuevo: true, mensajeCorto: "Buenas noches" },
  { id: 17, name: 'Quentin', mode: 'fire', image: require('../../assets/images/image5.png'), onLine: true, edad: 28, mensajeNuevo: false, mensajeCorto: "¿Qué hay de nuevo?" },
  { id: 18, name: 'Rita', mode: 'heart', image: require('../../assets/images/image.png'), onLine: false, edad: 34, mensajeNuevo: true, mensajeCorto: "¡Hola, amigo!" },
  { id: 19, name: 'Steve', mode: 'fire', image: require('../../assets/images/image1.png'), onLine: true, edad: 30, mensajeNuevo: false, mensajeCorto: "¿Todo bien?" },
  { id: 20, name: 'Tina', mode: 'heart', image: require('../../assets/images/image2.png'), onLine: false, edad: 25, mensajeNuevo: true, mensajeCorto: "¡Buenas, amigo!" }
];

const ChatsScreen = () => {
  
  const renderItem = ({ item }: { item: People }) => {

    const modeIcon = item.mode === 'fire' 
      ? <PartyModeIcon />  
      : <RomanceModeIcon />
    const onLineIcon = item.onLine ? <ActiveAvatarIcon /> : undefined;

    return (
      <ChatItemComponent
        profileImage={item.image}
        modeIcon={modeIcon}
        onLineIcon={onLineIcon}
        name={item.name}
        age={item.edad}
        mensajeCorto={item.mensajeCorto}
        mensajeNuevo={item.mensajeNuevo}   
        />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.inputContainer}>
          <View style={styles.customInputWrapper}>
            <CustomInputComponent 
              leftIcon={<PersonInputIcon />}
              rightIcon={<SearchInputIcon />}
              onRightIconPress={ () => {}}
            />
          </View>
          <View style={styles.notificationIconContainer}>
            <NotificationsIcon />
          </View>
        </View>
        <View style={styles.chatQuantityContainer}>
          <Text style={styles.chatQuantityText}>
          Chats ({people.length})
          </Text>
        </View>
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
    justifyContent: 'space-between',
    backgroundColor: '#FFF'
  },
  headerSection: {
    width: '100%',
    paddingHorizontal: 24,
    justifyContent: 'flex-start',
    paddingBottom: 20,
    paddingTop: 75
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
  chatQuantityContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 31
  },
  chatQuantityText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#222',
  },
  listContent: {

  },
  navBarContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    justifyContent: 'flex-end',
  }
})



export default ChatsScreen;