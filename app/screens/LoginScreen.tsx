import React                  from "react";
import HeaderLogo             from "../components/HeaderLogo";
import BackIcon               from "@/assets/icons/BackIcon";
import LoginFormIcon          from "@/assets/icons/LoginFormIcon";
import { RootStackParams }    from '../types';
import AppleButtonIcon        from "@/assets/icons/AppleButtonIcon";
import FacebookButtonIcon     from "@/assets/icons/FacebookButtonIcon";
import GoogleButtonIcon       from "@/assets/icons/GoogleButtonIcon";
import IconContainer          from "../components/common /IconContainer";
import PadlockFormIcon        from "@/assets/icons/PadlockFormIcon";
import TransparentCustomInput from "../components/common /TransparentCustomInput";
import EyeInputFormIcon       from "@/assets/icons/EyeInputFormIcon";
import ButtonComponent        from "../components/common /ButtonComponent";
import { 
  NavigationProp, 
  useNavigation } from '@react-navigation/native';
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  ScrollView } from "react-native";




const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderLogo leftIcon={<BackIcon />} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.formContainer}>
          <View style={styles.titleContainer}>
            <IconContainer icon={<LoginFormIcon />} />
            <Text style={styles.textProfileIcon}>Ingresa tu correo y contraseña</Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.emailInputContainer}>
              <View style={styles.emailTextContainer}>
                <Text style={styles.emailText}>Correo</Text>
              </View>
              <TransparentCustomInput 
              placeholder="Ingresa tu correo" 
              rightIcon={<PadlockFormIcon />}
              />
            </View>

            <View style={styles.passwordInputContainer}>
              <View style={styles.emailTextContainer}>
                <Text style={styles.emailText}>Contraseña</Text>
              </View>
              <TransparentCustomInput 
              placeholder="Ingresa tu contraseña" 
              rightIcon={<EyeInputFormIcon />}
              />
            </View>

            <View style={styles.buttonContainer}>
              <ButtonComponent 
                title="Acceder" 
                color="#B4002D"
                onPress={() => navigation.navigate('NearMeScreen')}
              />
            </View>
          </View>

          <View style={styles.forgotYourPassTextContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('PasswordRecoveryScreen')}>
              <Text style={styles.forgotYourPassText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.separatorContainer}>
            <View style={styles.separatorBar} />
            <Text style={styles.separatorO}>o</Text>
            <View style={styles.separatorBar} />
          </View>

          <View style={styles.loginOptionButtonContainer}>
            <ButtonComponent
              title="Continuar con Apple"
              color="#222"
              onPress={() => {}}
              icon={<AppleButtonIcon />}
            />
            <ButtonComponent
              title="Continuar con Facebook"
              color="#1877F2"
              onPress={() => {}}
              icon={<FacebookButtonIcon />}
            />
            <ButtonComponent
              title="Continuar con Google"
              color="transparent"
              onPress={() => {}}
              icon={<GoogleButtonIcon />}
              borderColor="#CCC"
              textColor="#222"
            />
          </View>

          <View style={styles.registerTextContainer}>
            <Text style={styles.regularText}>
              No tienes cuenta{'  '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')}>
              <Text style={styles.registerText}>Regístrate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerContainer: {
    width: '100%',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 70
  },
  formContainer: {
    flexGrow: 1,
    gap: 32,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  textProfileIcon: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#777',
    lineHeight: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    gap: 16,
  },
  emailInputContainer: {
    width: '100%',
    gap: 8,
  },
  emailTextContainer: {
    justifyContent: 'center',
  },
  emailText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#777',
    lineHeight: 16,
  },
  passwordInputContainer: {
    width: '100%',
    gap: 8,
  },
  buttonContainer: {},
  forgotYourPassTextContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotYourPassText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#B4002D',
    lineHeight: 20,
    textAlign: 'center',
  },
  separatorContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  separatorBar: {
    width: 24,
    height: 0.5,
    backgroundColor: '#CCC',
  },
  separatorO: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#A1A1A1',
    textAlign: 'center',
  },
  loginOptionButtonContainer: {
    gap: 20,
  },
  registerTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  regularText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  registerText: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#B4002D',
    lineHeight: 20,
    paddingLeft: 6
  },
});

export default LoginScreen;
