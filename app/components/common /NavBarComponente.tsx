import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ToquisComponent from "./ToquisComponent";
import TouchActiveNavBarIcon from "@/assets/icons/TouchActiveNavBarIcon";
import ChatsActiveNavBarIcon from "@/assets/icons/ChatsActiveNavBarIcon";
import ChatsInactiveNavBarIcon from "@/assets/icons/ChatsInactiveNavBarIcon";
import NearMeActiveNavBarIcon from "@/assets/icons/NearMeActiveNavBarIcon";
import NearMeInactiveNavBarIcon from "@/assets/icons/NearMeInactiveNavBarIcon";
import ProfileActiveNavBarIcon from "@/assets/icons/ProfileActiveNavBarIcon";
import ProfileInactiveNavBarIcon from "@/assets/icons/ProfileInactiveNavBarIcon";
import TouchInactiveNavBarIcon from "@/assets/icons/TouchInactiveNavBarIcon";
import { RootStackParams } from "@/App/types";

interface NavItemProps {
  screen: keyof RootStackParams;
  label: string;
  InactiveComponent: React.ComponentType;
  ActiveComponent: React.ComponentType;
  isActive: boolean;
  onPress: () => void;
}

const NavBarComponente = () => {
  const [activeScreen, setActiveScreen] = useState<keyof RootStackParams>("TouchScreen");
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const handlePress = (screen: keyof RootStackParams) => {
    setActiveScreen(screen);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <NavItem
          screen="TouchScreen"
          label="Toque"
          InactiveComponent={() => <TouchInactiveNavBarIcon />}
          ActiveComponent={() => <TouchActiveNavBarIcon />}
          isActive={activeScreen === "TouchScreen"}
          onPress={() => handlePress("TouchScreen")}
        />
        <NavItem
          screen="NearMeScreen"
          label="Cerca de mí"
          InactiveComponent={() => <NearMeInactiveNavBarIcon />}
          ActiveComponent={() => <NearMeActiveNavBarIcon />}
          isActive={activeScreen === "NearMeScreen"}
          onPress={() => handlePress("NearMeScreen")}
        />

        <View style={styles.curvedSvgContainer}>
          <Svg width="120" height="46" viewBox="0 0 120 46" fill="none" style={styles.shadowSvg}>
            <Path
              d="M115.44 36H0.560059C13.3306 36 23.6167 29.6451 29.1748 20.1792C34.6816 10.5155 45.0815 4 57 4C68.9185 4 79.3184 10.5155 84.8252 20.1792C90.3833 29.6451 100.669 36 112.44 36Z"
              fill="rgba(0, 0, 0, 0.03)"
            />
          </Svg>

          <Svg width="112" height="32" viewBox="0 0 112 32" fill="none">
            <Path
              d="M111.44 32H0.560059C12.3306 32 22.6167 25.6451 28.1748 16.1792C33.6816 6.5155 44.0815 0 56 0C67.9185 0 78.3184 6.5155 83.8252 16.1792C89.3833 25.6451 99.6694 32 111.44 32Z"
              fill="white"
            />
          </Svg>
        </View>

        <View style={styles.centerButtonContainer}>
          <TouchableOpacity style={styles.centerButton}>
            <ToquisComponent />
          </TouchableOpacity>
        </View>

        <NavItem
          screen="ChatsScreen"
          label="Chats"
          InactiveComponent={() => <ChatsInactiveNavBarIcon />}
          ActiveComponent={() => <ChatsActiveNavBarIcon />}
          isActive={activeScreen === "ChatsScreen"}
          onPress={() => handlePress("ChatsScreen")}
        />
        <NavItem
          screen="ProfileScreen"
          label="Perfil"
          InactiveComponent={() => <ProfileInactiveNavBarIcon />}
          ActiveComponent={() => <ProfileActiveNavBarIcon />}
          isActive={activeScreen === "ProfileScreen"}
          onPress={() => handlePress("ProfileScreen")}
        />
      </View>
    </View>
  );
};

const NavItem: React.FC<NavItemProps> = ({ label, InactiveComponent, ActiveComponent, isActive, onPress }) => {
  const IconComponent = isActive ? ActiveComponent : InactiveComponent;

  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <IconComponent />
      <Text style={[styles.navLabel, isActive && styles.activeLabel]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navBar: {
    width: "100%",
    height: 68,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 4,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  navLabel: {
    fontFamily: "Inter_400Regular",
    fontSize: 10,
    color: "#666",
    paddingTop: 10,
  },
  activeLabel: {
    color: "#B4002D",
  },
  centerButtonContainer: {
    top: -32,
    zIndex: 10,
  },
  centerButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#B4002D",
    justifyContent: "center",
    alignItems: "center",
  },
  curvedSvgContainer: {
    position: "absolute",
    top: -32,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 112,
    height: 32,
    left: '50%',
    marginLeft: -36.3,
  },
  shadowSvg: {
    position: "absolute",
    top: -6,
    left: -1,
    width: 120,
    height: 10,
  },
});

export default NavBarComponente;

