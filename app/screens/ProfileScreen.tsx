import React, { useState }    from "react";
import EditProfileIcon        from "@/assets/icons/EditProfileIcon";
import NotificationsIcon      from "@/assets/icons/NotificationsIcon";
import ProfileAvatarComponent from "../components/ProfileAvatarComponent";
import RomanceModeIcon        from "@/assets/icons/RomanceModeIcon";
import ProfileContent         from "../components/ProfileContent";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from "../types";

const ProfileScreen = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Perfil');

  const menuItems = ['Perfil', 'Gustos', 'Privacidad', 'Datos']; 

  const navigation = useNavigation<NavigationProp<RootStackParams>>();


  const renderContent = () => {
    switch (activeMenuItem) {
      case 'Perfil':
        return (
          <View style={styles.contentProfile}>
            <ProfileContent />
          </View>
        );
      case 'Gustos':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Gustos</Text>
          </View>
        );
      case 'Privacidad':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Privacidad</Text>
          </View>
        );
      case 'Datos':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>Datos</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeaderContainer}>
        <View style={styles.profileContentContainer}>
          <TouchableOpacity 
          style={styles.leftIconContainer}
          onPress={() => navigation.navigate('EditProfileScreen')}
          >
            
            <EditProfileIcon />
          </TouchableOpacity>
          <View style={styles.profileInfoContainer}>
            <ProfileAvatarComponent
              modeIcon={<RomanceModeIcon />}
              borderColor='rgba(220, 53, 69, 0.2)'
              profileImage={require('../../assets/images/image4.png')}
            />
            <Text style={styles.profileInfoText}>Micael, 28</Text>
          </View>
          <TouchableOpacity style={styles.rightIconContainer}>
            <NotificationsIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalMenu}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.itemContainer,
                activeMenuItem === item && styles.activeItemContainer,
              ]}
              onPress={() => setActiveMenuItem(item)}
            >
              <Text
                style={[
                  styles.itemText,
                  activeMenuItem === item && styles.activeItemText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  profileHeaderContainer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 75,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
    backgroundColor: '#FFF',
  },
  profileContentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  leftIconContainer: {
    width: 24,
    height: 24,
  },
  profileInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfoText: {
    color: '#222',
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    paddingTop: 12,
    paddingBottom: 16,
  },
  rightIconContainer: {
    width: 24,
    height: 24,
  },
  horizontalMenu: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 16,
    paddingBottom: 1
  },
  itemContainer: {
    paddingBottom: 16,
  },
  activeItemContainer: {
    borderBottomWidth: 1.25,
    borderBottomColor: '#222',
  },
  itemText: {
    color: '#777',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  activeItemText: {
    color: '#222',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 24,
    color: '#222',
  },
  contentProfile: {
   flex: 1
  }
});

export default ProfileScreen;
