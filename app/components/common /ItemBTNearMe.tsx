import React from "react";
import { View, StyleSheet, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
import TextLinkBTListIcon from "@/assets/icons/TextLinkBTListIcon";
import ProfileAvatarComponent from "./ProfileAvatarComponent";

interface ItemBTNearMeProps {
  borderColor: string;
  profileImage: ImageSourcePropType;
  modeIcon: React.ReactNode; 
  touchIcon?: React.ReactNode;
  onLineIcon?: React.ReactNode;
  messageIcon?: React.ReactNode;
  matchIcon?: React.ReactNode; 
  name: string;
  age: number;
}


const ItemBTNearMe: React.FC<ItemBTNearMeProps> = ({ 
  borderColor, 
  profileImage, 
  modeIcon,
  messageIcon,
  onLineIcon,
  name, 
  age 
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.personalInfoContainer}>
        <ProfileAvatarComponent
          borderColor={borderColor}
          profileImage={profileImage}
          modeIcon={modeIcon}
          onLineIcon={onLineIcon}
          messageIcon={messageIcon}
        />
        <Text style={styles.informationText}>{`${name}, ${age}`}</Text>
      </View>
      <TouchableOpacity style={styles.textLinkContainer}>
        <Text style={styles.textLink}>Ver perfil</Text>
        <TextLinkBTListIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  informationText: {
    fontSize: 17,
    fontFamily: 'Inter_600SemiBold',
    textAlign: 'center',
    color: '#222',
    marginLeft: 12,
  },
  personalInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textLinkContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 12,
    gap: 4
  },
  textLink: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#B4002D',
  },
});

export default ItemBTNearMe;
