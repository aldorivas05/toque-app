import React, { useState }   from "react";
import { RootStackParams } from "@/App/types";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { 
  View, 
  Text,
  StyleSheet, 
  TouchableOpacity 
} from "react-native";
import TouchInactiveNavBarIcon from "@/assets/icons/TouchInactiveNavBarIcon";
import TouchActiveNavBarIcon from "@/assets/icons/TouchActiveNavBarIcon";
import NearMeInactiveNavBarIcon from "@/assets/icons/NearMeInactiveNavBarIcon";
import NearMeActiveNavBarIcon from "@/assets/icons/NearMeActiveNavBarIcon";
import ChatsInactiveNavBarIcon from "@/assets/icons/ChatsInactiveNavBarIcon";
import ChatsActiveNavBarIcon from "@/assets/icons/ChatsActiveNavBarIcon";
import ProfileInactiveNavBarIcon from "@/assets/icons/ProfileInactiveNavBarIcon";
import ProfileActiveNavBarIcon from "@/assets/icons/ProfileActiveNavBarIcon";



interface NavItem {
  screen: keyof RootStackParams;
  label: string;
  iconInactive: React.ComponentType;
  iconActive: React.ComponentType;
}

const navItems: NavItem[] = [
  { screen: 'TouchScreen', label: 'Toque', iconInactive: TouchInactiveNavBarIcon, iconActive: TouchActiveNavBarIcon },
  { screen: 'NearMeScreen', label: 'Cerca de mí', iconInactive: NearMeInactiveNavBarIcon, iconActive: NearMeActiveNavBarIcon },
  { screen: 'ChatsScreen', label: 'Chats', iconInactive: ChatsInactiveNavBarIcon, iconActive: ChatsActiveNavBarIcon },
  { screen: 'LoginScreen', label: 'Perfil', iconInactive: ProfileInactiveNavBarIcon, iconActive: ProfileActiveNavBarIcon },
];

const NavBarComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const handlePress = (index: number, screen: keyof RootStackParams) => {
    setActiveIndex(index);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.navBar}>
      {navItems.map((item, index) => {
        const Icon = index === activeIndex ? item.iconActive : item.iconInactive;
        return (
          <TouchableOpacity
            key={index}
            style={styles.iconWrapper}
            onPress={() => handlePress(index, item.screen)}
            accessible={true}
            accessibilityLabel={`Navegar a ${item.label}`}
          >
            <View style={styles.iconContainer}>
              <Icon />
            </View>
            <Text style={[
              styles.iconText,
              index === activeIndex && styles.activeText,
            ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    height: 68,
    borderRadius: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 4,
  },
  iconWrapper: {
    width: 64,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 10
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: "center",
  },
  iconText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 10,
    color: '#777',
  },
  activeText: {
    color: '#B4002D',
  },
});

export default NavBarComponent;