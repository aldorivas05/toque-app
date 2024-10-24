import React from 'react';
import { View, StyleSheet, ImageSourcePropType, Image } from 'react-native';

interface AvatarComponentProps {
  borderColor?: string;
  profileImage: ImageSourcePropType;
  modeIcon: React.ReactNode; 
  touchIcon?: React.ReactNode; 
  messageIcon?: React.ReactNode;
  onLineIcon?:  React.ReactNode;
  matchIcon?: React.ReactNode; 
}

const AvatarComponent: React.FC<AvatarComponentProps> = ({ 
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
    width: '40%', 
    height: '40%',
    borderRadius: 14,
    backgroundColor: '#fff',
    position: 'absolute',
    top: '75%',
    left: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchIconContainer: {
    width: '40%', 
    height: '40%', 
    borderRadius: 14,
    position: 'absolute',
    top: '-7%',
    left: '-7%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageIconContainer: {
    width: '40%', 
    height: '40%',
    borderRadius: 14,
    position: 'absolute',
    top: '-6%',
    left: '-8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onLineIconContainer: {
    width: '40%',
    height: '40%',
    borderRadius: 14,
    position: 'absolute',
    top: '-10%',
    left: '78%',
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

export default AvatarComponent;