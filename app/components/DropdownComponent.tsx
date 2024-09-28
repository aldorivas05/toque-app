import HeartIcon                  from '@/assets/icons/HeartIcon';
import React, { useState }        from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown }               from 'react-native-element-dropdown';


const DropdownComponent = () => {
  const [selectedMode1, setSelectedMode1] = useState('');
  const [selectedMode2, setSelectedMode2] = useState('');

  const optionsMode1 = [
    { label: 'Romance', value: 'Romance' },
    { label: 'Fuego', value: 'Fuego' },
  ];

  const optionsMode2 = [
    { label: 'Visible', value: 'Visible' },
    { label: 'Oculto', value: 'Oculto' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Modo:</Text>

      <View style={styles.dropdownInitialContainer}>
        <View style={styles.iconDropdownContainer}>
           <HeartIcon />
          <Dropdown
            style={styles.dropdownWithIcon}
            data={optionsMode1}
            labelField="label"
            valueField="value"
            placeholder="Romance"
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            value={selectedMode1}
            onChange={item => setSelectedMode1(item.value)}
          />
        </View>
      </View>

      <View style={styles.dropdownContainer}>
        <Dropdown
          style={styles.dropdownWithPadding}
          data={optionsMode2}
          labelField="label"
          valueField="value"
          placeholder="Visible"
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          value={selectedMode2}
          onChange={item => setSelectedMode2(item.value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    gap: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  text: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#777777',
    marginLeft: 8
  },
  dropdownInitialContainer: {
    flex:1,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
    overflow: 'hidden',
    marginRight: 4
  },
  dropdownContainer: {
    flex:1,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
    overflow: 'hidden',
  },
  iconDropdownContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
  },
  dropdownWithIcon: {
    flex: 1,
    paddingHorizontal: 12, 
    
  },
  dropdownWithPadding: {
    flex: 1,
    paddingHorizontal: 12,
  },
  placeholderStyle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#777777',
  },
  selectedTextStyle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#777777',
  },
});

export default DropdownComponent;
