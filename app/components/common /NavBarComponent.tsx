import React, { useState }   from "react";
import { 
  View, 
  Text,
  StyleSheet, 
  TouchableOpacity 
} from "react-native";
import ChatsNavbarIcon      from "@/assets/icons/ChatsNavBarIcon";
import NearMeNavBarIcon     from "@/assets/icons/NearMeNavBarIcon";
import ProfileNavBarIcon    from "@/assets/icons/ProfileNavBarIcon";
import TouchNavIcon         from "@/assets/icons/TocuhNavIcon";

const NavBarComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <View style={styles.navBar}>

      <TouchableOpacity style={styles.iconWrapper} onPress={() => setActiveIndex(0)}>
        <View style={styles.iconContainer}>
          <TouchNavIcon />
        </View>
        <Text style={styles.iconText}>Toque</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper} onPress={() => setActiveIndex(1)}>
        <View style={styles.iconContainer}>
          <NearMeNavBarIcon />
        </View>
        <Text style={[styles.iconText, styles.activeText]}>Cerca de mí</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper} onPress={() => setActiveIndex(2)}>
        <View style={styles.iconContainer}>
          <ChatsNavbarIcon />
        </View>
        <Text style={styles.iconText}>Chats</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper} onPress={() => setActiveIndex(3)}>
        <View style={styles.iconContainer}>
          <ProfileNavBarIcon />
        </View>
        <Text style={styles.iconText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    height: 68, 
    minHeight: 68,
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
    gap: 8,
    flex:1
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: "center",
  },
  iconText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 10,
    color: '#777777',
  },
  activeText: {
    color: '#B4002D',
  },
});

export default NavBarComponent;
