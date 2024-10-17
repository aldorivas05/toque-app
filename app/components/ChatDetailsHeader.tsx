import BackIcon from "@/assets/icons/BackIcon";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ChatHeaderAvatar from "./common /ChatHeaderAvatar";
import WarningChatHeaderIcon from "@/assets/icons/WarningChatHeaderIcon";
import ActiveChatAvatarIcon from "@/assets/icons/ActiveChatAvatarIcon";



const ChatDetailsHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <BackIcon />
        <View style={styles.ChatAvatarContainer}>
          <ChatHeaderAvatar 
            profileImage={require('../../assets/images/image1.png')}
            onLineIcon={<ActiveChatAvatarIcon />}
          />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTextInfo}>Alejandro, 24</Text>
          <Text style={styles.headerTextOnLIne}>En linea</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <WarningChatHeaderIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    width: '100%',
    paddingTop: 75,
    paddingBottom: 8,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
    flexDirection: 'row',
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    height: 36
  },
  ChatAvatarContainer: {
    paddingLeft: 16, 
    paddingRight: 8
  },
  headerTextContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerTextInfo: {
    color: '#222',
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Inter_600SemiBold',

  },
  headerTextOnLIne: {
    color: '#777',
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    lineHeight: 16
  },
  iconContainer: {
    width: 24,
    height: 24,
    marginLeft: 16
  },
  headerText: {
    color: '#222',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
  },
});


export default ChatDetailsHeader;