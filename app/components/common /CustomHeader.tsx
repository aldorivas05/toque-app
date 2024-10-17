import BackIcon from '@/assets/icons/BackIcon';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const CustomHeader: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <BackIcon />
      </View>
      <Text style={styles.headerText}>Filtrar</Text>
      <View style={styles.iconContainer}>
  
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
  iconContainer: {
    width: 24,
    height: 24,
  },
  headerText: {
    color: '#222',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
  },
});

export default CustomHeader;
