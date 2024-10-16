import ToqueLogoHeader from '@/assets/icons/ToqueLogoHeader';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface HeaderLogoProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ leftIcon, rightIcon }) => {
  return (
    <View style={styles.container}>

      <View style={styles.iconContainer}>{leftIcon}</View>
      
      <ToqueLogoHeader />
      
      <View style={styles.iconContainer}>{rightIcon}</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    paddingTop: 75,
    paddingBottom: 8,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
});

export default HeaderLogo;
