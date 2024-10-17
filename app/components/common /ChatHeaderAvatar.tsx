import React from 'react';
import { View, StyleSheet, ImageSourcePropType, Image } from 'react-native';

interface ChatHeaderAvatarProps {
  profileImage: ImageSourcePropType;
  onLineIcon?:  React.ReactNode;
}

const ChatHeaderAvatar: React.FC<ChatHeaderAvatarProps> = ({  
  profileImage,  
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
    width: 32,
    height: 32,
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

export default ChatHeaderAvatar;