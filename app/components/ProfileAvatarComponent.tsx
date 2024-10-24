import React from 'react';
import { View, StyleSheet, ImageSourcePropType, Image } from 'react-native';

interface ProfileAvatarComponentProps {
  borderColor?: string;
  profileImage: ImageSourcePropType;
  modeIcon: React.ReactNode; 
}

const ProfileAvatarComponent: React.FC<ProfileAvatarComponentProps> = ({ 
  borderColor, 
  profileImage, 
  modeIcon, 
 }) => {
  return (
    <View style={[styles.container, { borderColor }]}>
      <View style={styles.profileImageContainer}>
        <Image
          source={profileImage}
          style={styles.profileImageContainer}
        />
      </View>


      <View style={styles.iconContainer}>
        {modeIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 108,
    height: 108,
    borderRadius: 96,
    borderWidth: 4,
    borderColor: 'rgba(255, 193, 7, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2.5,
    position: 'relative',
  },
  profileImageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 96,
    overflow: 'hidden',
  },
  imageOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 96,
    backgroundColor: 'rgba(220, 53, 69, 0.5)',
  },
  iconContainer: {
    width: '32%', 
    height: '32%',
    borderRadius: 34,
    backgroundColor: '#fff',
    position: 'absolute',
    top: '75%',
    left: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileAvatarComponent;