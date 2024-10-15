import React from 'react';
import { View, StyleSheet, ImageSourcePropType, Image } from 'react-native';

interface ProfileAvatarComponentProps {
  borderColor: string;
  profileImage: ImageSourcePropType;
  modeIcon: React.ReactNode; 
  touchIcon?: React.ReactNode; 
  messageIcon?: React.ReactNode;
  onLineIcon?:  React.ReactNode;
  matchIcon?: React.ReactNode; 
}

const ProfileAvatarComponent: React.FC<ProfileAvatarComponentProps> = ({ 
  borderColor, 
  profileImage, 
  modeIcon, 
  touchIcon, 
  messageIcon, 
  onLineIcon, 
  matchIcon
 }) => {
  return (
    <View style={[styles.container, { borderColor }]}>
      <View style={styles.profileImageContainer}>
        <Image
          source={profileImage}
          style={styles.profileImageContainer}
        />
      </View>

      {matchIcon && (
        <View style={styles.imageOverlay} />
      )}

      <View style={styles.iconContainer}>
        {modeIcon}
      </View>

      {touchIcon && (
        <View style={styles.touchIconContainer}>
          {touchIcon}
        </View>
      )}

      {messageIcon && (
        <View style={styles.messageIconContainer}>
          {messageIcon}
        </View>
      )}

      {onLineIcon && (
        <View style={styles.onLineIconContainer}>
          {onLineIcon}
        </View>
      )}

      {matchIcon && (
        <View style={styles.matchIconContainer}>
          {matchIcon}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 4,
    borderColor: 'rgba(255, 193, 7, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4.5,
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
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 40,
    left: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    position: 'absolute',
    top: -5,
    left: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    position: 'absolute',
    top: -8,
    left: -8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onLineIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    position: 'absolute',
    top: -8,
    left: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchIconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 23,
  },
});

export default ProfileAvatarComponent;

