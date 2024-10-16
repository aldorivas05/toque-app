import React from "react";
import { View, StyleSheet, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
import NewMessIndicatorIcon from "@/assets/icons/NewMessIndicatorIcon";
import ChatAvatarComponent from "./ChatAvatarComponent";
import GoToChatArrow from "@/assets/icons/GoToChatArrowIcon";

interface ChatItemComponentProps {
  profileImage: ImageSourcePropType;
  modeIcon: React.ReactNode; 
  touchIcon?: React.ReactNode;
  onLineIcon?: React.ReactNode;
  messageIcon?: React.ReactNode;
  matchIcon?: React.ReactNode; 
  name: string;
  age: number;
  mensajeCorto: string;
  mensajeNuevo: boolean
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const ChatItemComponent: React.FC<ChatItemComponentProps> = ({ 
  profileImage, 
  modeIcon, 
  messageIcon,
  onLineIcon,
  mensajeCorto,
  mensajeNuevo, 
  name, 
  age 
}) => {

  const maxLength = 25;

  return (
    
    <View style={styles.container}>
      <View style={styles.personalInfoContainer}>
        <ChatAvatarComponent
        
          profileImage={profileImage}
          modeIcon={modeIcon}
          onLineIcon={onLineIcon}
          messageIcon={messageIcon}
        />
        <View style={styles.messageInfoContainer}>
          <Text style={styles.informationText}>{`${name}, ${age}`}</Text>
          <Text 
            style={[
              styles.messageText, 
              !mensajeNuevo && { fontFamily: 'Inter_400Regular', color: '#777' }
            ]}
          >
            {truncateText(mensajeCorto, maxLength)}
          </Text>
          <Text style={styles.timeInfoText}>6.28 AM</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.textLinkContainer}>
      {mensajeNuevo && (
        <NewMessIndicatorIcon />
      )}
        <GoToChatArrow />
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
  personalInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  messageInfoContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 12,
    gap: 4
  },
  informationText: {
    fontSize: 17,
    fontFamily: 'Inter_600SemiBold',
    textAlign: 'center',
    color: '#222',
  },
  messageText: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    lineHeight: 20,
    color: '#222',
  },
  timeInfoText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    lineHeight: 16,
    color: '#A1A1A1',
  },
  textLinkContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12
  },
});

export default ChatItemComponent;




