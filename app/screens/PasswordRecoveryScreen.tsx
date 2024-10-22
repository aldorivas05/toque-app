import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IconContainer from "../components/common /IconContainer";
import PasswordRecoverIcon from "@/assets/icons/PasswordRecoverIcon";
import TransparentCustomInput from "../components/common /TransparentCustomInput";
import PadlockFormIcon from "@/assets/icons/PadlockFormIcon";
import ButtonComponent from "../components/common /ButtonComponent";



const PasswordRecoveryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <IconContainer 
        icon={<PasswordRecoverIcon />}
        />
        <Text style={styles.iconText}>Ingresa tu email para enviarte un código de verificación</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Correo</Text>
          <TransparentCustomInput 
            placeholder="Ingresa tu correo" 
            rightIcon={<PadlockFormIcon />}
            />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent 
          title="Enviar" 
          color="#F6F6F6"
          onPress={() => {}}
          textColor="#A1A1A1"
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24
  },
  contentContainer: {
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 88
  },
  iconText: {
   fontFamily: 'Inter_400Regular',
   fontSize: 14,
   color: '#777',
   paddingTop: 24,
  },
  inputContainer: {
    paddingTop: 48
  },
  inputText: {
    paddingLeft: 16,
    paddingBottom: 8,
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#222'
  },
  buttonContainer: {
    paddingBottom: 24
  }
})

export default PasswordRecoveryScreen;