import React from 'react';
import { View, StyleSheet, ImageSourcePropType, Image } from 'react-native';

interface ChatAvatarComponentProps {
  borderColor?: string;
  profileImage: ImageSourcePropType;
  modeIcon: React.ReactNode; 
  touchIcon?: React.ReactNode; 
  messageIcon?: React.ReactNode;
  onLineIcon?:  React.ReactNode;
  matchIcon?: React.ReactNode; 
}

const ChatAvatarComponent: React.FC<ChatAvatarComponentProps> = ({  
  profileImage, 
  modeIcon,  
  onLineIcon,
 }) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.profileImageContainer}>
        <Image
          source={profileImage}
          style={styles.profileImageContainer}
        />
      </View>


      <View style={styles.iconContainer}>
        {modeIcon}
      </View>


      {onLineIcon && (
        <View style={styles.onLineIconContainer}>
          {onLineIcon}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  profileImageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 36,
    overflow: 'hidden',
  },
  imageOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 36,
    backgroundColor: 'rgba(220, 53, 69, 0.5)',
  },
  iconContainer: {
    width: '40%', 
    height: '40%',
    borderRadius: 14,
    backgroundColor: '#fff',
    position: 'absolute',
    top: '60%',
    left: '65%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onLineIconContainer: {
    width: '40%',
    height: '40%',
    borderRadius: 14,
    position: 'absolute',
    top: '-8%',
    left: '66%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchIconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%', 
    height: '35%', 
  },
});

export default ChatAvatarComponent;