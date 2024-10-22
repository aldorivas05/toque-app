import React                           from "react";
import PhoneCodeDropdown               from "../components/PhoneCodeDropdown";
import TransparentCustomInput          from "../components/common /TransparentCustomInput";
import CountryDropdown                 from "../components/common /CountryDropdown";
import SelectionComponent              from "../components/common /SelectionComponent";
import WomenSelectionComponentIcon     from "@/assets/icons/WomenSelectionComponentIcon";
import MenSelectionComponentIcon       from "@/assets/icons/MenSelectionComponentIcon";
import OthersGenderSelectComponentIcon from "@/assets/icons/OthersGenderSelectComponentIcon";
import SlimSelectComponentIcon         from "@/assets/icons/SlimSelectComponentIcon";
import AthleticSelectComponentIcon     from "@/assets/icons/AthleticSelectComponentIcon";
import PlumpSelectComponentIcon        from "@/assets/icons/PlumpSelectComponentIcon";
import StrongSelectComponent           from "@/assets/icons/StrongSelectComponent";
import EducationLevelDropdown          from "../components/common /EducationLevelDropdown";
import SelectionCheckComponent         from "../components/common /SelectionCheckComponent";
import MultiSliderRange                from "../components/common /MultiSliderRange";
import PadlockFormIcon                 from "@/assets/icons/PadlockFormIcon";
import EyeInputFormIcon                from "@/assets/icons/EyeInputFormIcon";
import CheckButton                     from "../components/common /CheckButton";
import ButtonComponent                 from "../components/common /ButtonComponent";
import { 
  View,
  Text,
  StyleSheet, 
  ScrollView, 
  TouchableOpacity } from "react-native";


const RegistrationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Sobre ti</Text>
      </View>
      <View style={styles.tellUsMore}>
        <View style={styles.tellUsMoreTitleContainer}>
          <Text style={styles.tellUsMoreTitleText}>Cuéntanos más</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitleInputTex}>¿Cuál es tu teléfono?</Text>
          <View style={styles.phoneInputsContainer}>
            <PhoneCodeDropdown />
            <TransparentCustomInput 
            placeholder="" 
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitleInputTex}>¿Cuál es tu nombre?</Text>
          <View style={styles.phoneInputsContainer}>
            <TransparentCustomInput 
            placeholder="Ingresa tu nombre"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitleInputTex}>¿Cuándo es tu nacimiento?</Text>
          <View style={styles.phoneInputsContainer}>
            <TransparentCustomInput 
            placeholder="DD / MM / AAAA"
            />
          </View>
          <Text style={styles.dateLegend}>*Tu perfil muestra tu edad, no tu fecha de nacimiento.</Text>
          
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitleInputTex}>¿Cuál es tu ciudad?</Text>
          <View style={styles.phoneInputsContainer}>
            <TransparentCustomInput 
            placeholder="Ingresa tu ciudad"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitleInputTex}>¿De dónde eres?</Text>
          <View style={styles.phoneInputsContainer}>
            <CountryDropdown />
          </View>
        </View>

      </View>
      <View style={styles.genderContainer}>
        <View style={styles.titleItemContainer}>
          <Text style={styles.titleItemText}>¿Cuál es tu género?</Text>
        </View>
        <View style={styles.SelectionComponentContainer}>
          <SelectionComponent
            icon={<WomenSelectionComponentIcon />} 
            text={'Mujer'} 
          />
        </View>
        <View style={styles.SelectionComponentContainer}>
          <SelectionComponent
            icon={<MenSelectionComponentIcon />} 
            text={'Hombre'} 
          />
        </View>
        <View style={styles.SelectionComponentContainer}>
          <SelectionComponent
            icon={<OthersGenderSelectComponentIcon />} 
            text={'Otros'} 
          />
          <Text style={styles.dateLegend}>*Siempre puedes actualizar esto más tarde.</Text>
          
        </View>
      </View>
      <View style={styles.heightContainer}>
        <View style={styles.titleItemContainer}>
          <Text style={styles.titleItemText}>¿Cuál es altura?</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitleInputTex}>Altura</Text>
          <View style={styles.phoneInputsContainer}>
            <TransparentCustomInput 
            placeholder="Ej. 1.80cm"
            />
          </View>
        </View>
      </View>
      <View style={styles.complexionContainer}>
        <View style={styles.titleItemContainer}>
          <Text style={styles.titleItemText}>¿Cuál es tu complexión?</Text>
        </View>
        <View style={styles.SelectionComponentContainer}>
          <SelectionComponent
            icon={<SlimSelectComponentIcon />} 
            text={'Delgado'} 
          />
        </View>
        <View style={styles.SelectionComponentContainer}>
          <SelectionComponent
            icon={<AthleticSelectComponentIcon />} 
            text={'Atlético'} 
          />
        </View>
        <View style={styles.SelectionComponentContainer}>
          <SelectionComponent
            icon={<SlimSelectComponentIcon />} 
            text={'Normal'} 
          />
        </View>
        <View style={styles.SelectionComponentContainer}>
          <SelectionComponent
            icon={<PlumpSelectComponentIcon />} 
            text={'Rellenito'} 
          />
        </View>
        <View style={styles.SelectionComponentContainer}>
          <SelectionComponent
            icon={<StrongSelectComponent />} 
            text={'Fuerte'} 
          />
        </View>
      </View>
      <View style={styles.educationLevelContainer}>
        <View style={styles.titleItemContainer}>
          <Text style={styles.titleItemText}>¿Cuál es tu nivel de educación?</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subtitleInputTex}>Educación</Text>
          <View style={styles.phoneInputsContainer}>
            <EducationLevelDropdown />
          </View>
        </View>
      </View>
      <View style={styles.titleAboutYourTastesContainer}>
        <Text style={styles.titleText}>Sobre tus gustos</Text>
      </View>
      <View style={styles.interestInKnowingContainer}>
        <View style={styles.interestInKnowingTitleContainer}>
          <Text style={styles.titleItemText}>¿A quién te interesa conocer?</Text>
        </View>
        <View style={styles.SelectionComponentContainer}>
          <SelectionCheckComponent
            icon={<WomenSelectionComponentIcon />} 
            text={'Mujer'} 
          />
        </View>
        <View style={styles.SelectionComponentContainer}>
          <SelectionCheckComponent
            icon={<MenSelectionComponentIcon />} 
            text={'Hombre'} 
          />
        </View>
        <View style={styles.SelectionComponentContainer}>
          <SelectionCheckComponent
            icon={<OthersGenderSelectComponentIcon />} 
            text={'Otros'} 
          />
        </View>
      </View>
      <View style={styles.ageRangeContainerContainer}>
        <View style={styles.titleItemContainer}>
          <Text style={styles.titleItemText}>Preferencia de edad</Text>
        </View>
        <View style={styles.textLegendContainer}>
          <Text style={styles.textAgePreference}>
            Elije un mínimo y un máximo de edad para las posibles personas.
            </Text>
          <MultiSliderRange 
            title="Rango de edad"
            minValue={18}
            maxValue={60}
          />
        </View>
      </View>
      <View style={styles.heightContainer}>
        <View style={styles.titleItemContainer}>
          <Text style={styles.titleItemText}>Preferencia de distancia</Text>
        </View>
        <View style={styles.SelectionComponentContainer}>
          <Text style={styles.textAgePreference}>
            Elije la distancia máxima a la que te gustaría que se ubicaran las posibles personas.
          </Text>
          <MultiSliderRange 
            title="Rango de distancia"
            minValue={18}
            maxValue={60}
          />
        </View>
      </View>
      <View style={styles.heightContainer}>
        <View style={styles.titleItemContainer}>
          <Text style={styles.titleItemText}>Solo un paso más</Text>
        </View>
        <Text style={styles.subtitleInputTex}>¿Cuál es tu correo?</Text>
        <View style={styles.emailInputsContainer}>
          <TransparentCustomInput 
          placeholder="ejemplo@mail.com"
          rightIcon={<PadlockFormIcon />}
          />
        </View>
        <Text style={styles.subtitleInputTex}>Elije una contraseña</Text>
        <View style={styles.phoneInputsContainer}>
          <TransparentCustomInput 
          placeholder="**********"
          rightIcon={<EyeInputFormIcon />}
          />
        </View>
      </View>
      <View style={styles.termsConditionsContainer}>
        <CheckButton />
        <View style={styles.textSection}>
          <View style={styles.termsConditionsTextContainer}>
              <Text style={styles.regularText}>Acepto los{'  '}</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.termsConditionsText}>Términos y condiciones.</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.privacyPolicyTextContainer}>
              <Text style={styles.regularText}>
              Conoce cómo utilizamos tus datos en nuestra
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.privacyPolicyText}>Términos y condiciones.</Text>
              </TouchableOpacity>
          </View>
        </View>

      </View>
      <View style={styles.buttonContainer}>
          <ButtonComponent
            title="Regístrarme"
            color="#B4002D"
            onPress={() => {}}
            textColor="#FFF"
          />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 25,
    backgroundColor: '#FFF',
    paddingBottom: 100
  },
  titleContainer: {
    paddingBottom: 32,
  },
  titleText: {
    color: '#B4002D',
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
  },
  tellUsMore: {
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  tellUsMoreTitleContainer: {
    paddingBottom: 32,
  },
  tellUsMoreTitleText: {
  fontFamily: 'Inter_600SemiBold',
  fontSize: 17,
  color: '#222'
  },
  inputContainer: {
    paddingBottom: 16

  },
  subtitleInputTex: {
    paddingLeft: 16,
    paddingBottom: 8
  },
  phoneInputsContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
  },
  dateLegend: {
    color: '#777',
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Inter_400Regular',
    paddingTop: 10
  },
  genderContainer: {

  },
  titleItemContainer: {
    paddingBottom: 32,
    paddingTop: 16
  },
  titleItemText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 17,
    color: '#222'
  },
  SelectionComponentContainer: {
    paddingBottom: 16
  },
  heightContainer: {},
  textAgePreference: {
    color: '#777',
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Inter_400Regular',
    paddingBottom: 20
  },
  textSection: {},
  complexionContainer: {},
  complexionTitleContainer: {},
  educationLevelContainer: {},
  titleAboutYourTastesContainer: {
    paddingTop: 16,
    paddingBottom: 32
  },
  interestInKnowingContainer: {},
  interestInKnowingTitleContainer: {
    paddingBottom: 32
  },
  ageRangeContainerContainer: {},
  textLegendContainer: {},
  emailInputsContainer: {
    paddingBottom: 16
  },
  termsConditionsContainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 24
  },
  termsConditionsTextContainer: {
    flex: 1,
    paddingLeft: 12,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  regularText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#777',
  },
  termsConditionsText: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: '#B4002D',
    lineHeight: 20,
  },
  privacyPolicyTextContainer: {
    justifyContent: 'center',
    alignContent: 'flex-start',
    paddingLeft: 12,
  },
  privacyPolicyText: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: '#B4002D',
    lineHeight: 20,
  },
  buttonContainer: {
    paddingBottom: 200
  }
});


export default RegistrationScreen;