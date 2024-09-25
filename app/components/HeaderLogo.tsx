import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const HeaderLogo = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/toqueLogo.png')} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    top: 50
  },
  image: {
      width: 84,
      height:36
  }
})

export default HeaderLogo;