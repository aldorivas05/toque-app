import React            from 'react';
import { 
  View, 
  Image,
  StyleSheet, 
  ImageSourcePropType } from 'react-native';

interface ProfileAvatarComponentProps {
  borderColor: string;
  profileImage: ImageSourcePropType;
  modeIcon: ImageSourcePropType;
  touchIcon?: ImageSourcePropType;
  matchIcon?: ImageSourcePropType;
}

const ProfileAvatarComponent: React.FC<ProfileAvatarComponentProps> = ({ borderColor, profileImage, modeIcon, touchIcon, matchIcon }) => {
  return (
    <View style={[styles.container, { borderColor }]}>
      <Image
        source={profileImage}
        style={styles.profileImage}
      />

      {matchIcon && (
        <View style={styles.imageOverlay} />
      )}

      <View style={styles.iconContainer}>
        <Image source={modeIcon} style={styles.modeIcon} />
      </View>

      {touchIcon && (
        <View style={styles.touchIconContainer}>
          <Image source={touchIcon} style={styles.touchIcon} />
        </View>
      )}

      {matchIcon && (
        <View style={styles.matchIconContainer}>
          <Image source={matchIcon} style={styles.matchIcon} />
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
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 36,
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
    borderWidth: 2,
  },
  modeIcon: {
    width: 28,
    height: 28,
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
  touchIcon: {
    width: 28,
    height: 28,
  },
  matchIconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 23,
  },
  matchIcon: {
    width: 25,
    height: 23,
  },
});

export default ProfileAvatarComponent;
