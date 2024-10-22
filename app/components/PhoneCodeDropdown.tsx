import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const PhoneCodeDropdown = () => {

  const [selectedCode, setSelectedCode] = useState('');

  const phoneCodeOptions = [
    { label: 'US +1', value: '+1' },
    { label: 'ES +34', value: '+34' },
    { label: 'MX +52', value: '+52' },
    { label: 'CO +57', value: '+57' },
    { label: 'CA +1', value: '+1' },
    { label: 'AR +54', value: '+54' },
    { label: 'BR +55', value: '+55' },
    { label: 'CL +56', value: '+56' },
    { label: 'PE +51', value: '+51' },
    { label: 'VE +58', value: '+58' },
    { label: 'CR +506', value: '+506' },
    { label: 'PA +507', value: '+507' },
    { label: 'UY +598', value: '+598' },
    { label: 'PY +595', value: '+595' },
    { label: 'EC +593', value: '+593' },
    { label: 'BO +591', value: '+591' },
    { label: 'HN +504', value: '+504' },
    { label: 'NI +505', value: '+505' },
    { label: 'SV +503', value: '+503' },
    { label: 'GT +502', value: '+502' }
  ];

  return (
    <View style={styles.dropdownContainer}>
      <Dropdown
        style={styles.dropdown}
        data={phoneCodeOptions}
        labelField="label"
        valueField="value"
        placeholder="ES +34"
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        value={selectedCode}
        onChange={item => setSelectedCode(item.value)}
        renderLeftIcon={() => (
          <View style={styles.iconContainer}>
            
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    width: 112,
    borderRadius: 28,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#CCC',
    overflow: 'hidden',
  },
  dropdown: {
    flex: 1,
    paddingHorizontal: 8,
  },
  iconContainer: {
    marginRight: 8,
  },
  placeholderStyle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#222',
  },
  selectedTextStyle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#222',
  },
});

export default PhoneCodeDropdown;
