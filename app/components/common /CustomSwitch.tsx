import * as React from 'react';
import { Switch } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const CustomSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color="#777777"
        trackColor={{ false: '#A1A1A1', true: '#777777' }}
        thumbColor="#FFFFFF"
        style={styles.switch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    padding: 2,
  },
});

export default CustomSwitch;
