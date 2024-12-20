import React, { useState }             from "react";
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

type Gender = 'Mujer' | 'Hombre' | 'Otros';
type Complexion = 'Delgado' | 'Atlético' | 'Normal' | 'Rellenito' | 'Fuerte';
type Interest = 'Mujer' | 'Hombre' | 'Otros';

const RegistrationScreen = () => {
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [selectedComplexion, setSelectedComplexion] = useState<Complexion | null>(null);
  const [selectedInterest, setSelectedInterest] = useState<Interest[]>([]);

  const handleGenderSelect = (gender: Gender) => setSelectedGender(gender);
  const handleComplexionSelect = (complexion: Complexion) => setSelectedComplexion(complexion);

  const handleInterestSelect = (interest: Interest) => {
    setSelectedInterest((prevSelected) => 
      prevSelected.includes(interest)
        ? prevSelected.filter(item => item !== interest)
        : [...prevSelected, interest]
    );
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>Sobre ti</Text>
      <TellUsMoreSection />
      <YourGenderSection selectedGender={selectedGender} onSelect={handleGenderSelect} />
      <YourHeightSection />
      <YourComplexionSection selectedComplexion={selectedComplexion} onSelect={handleComplexionSelect} />
      <YourLevelStudySection />
      <Text style={styles.titleText}>Sobre tus gustos</Text>
      <InterestKnowingSection selectedInterest={selectedInterest} onSelect={handleInterestSelect} />
      <AgePreferenceSection />
      <DistancePreferenceSection />
      <OneMoreStepSection />
    </ScrollView>
  );
};

const TellUsMoreSection = () => (
  <View style={styles.sectionContainer}>
    <Text style={styles.titleSectionText}>Cuéntanos más</Text>

    <View style={styles.inputsContainer}>
      <Text style={styles.subtitleInputText}>¿Cuál es tu teléfono?</Text>
      <View style={styles.dropdownContainer}>
        <PhoneCodeDropdown />
        <TransparentCustomInput placeholder="" />
      </View>
    </View>

    <View style={styles.inputsContainer}>
      <Text style={styles.subtitleInputText}>¿Cuál es tu nombre?</Text>
      <TransparentCustomInput placeholder="Ingresa tu nombre" />
    </View>

    <View style={styles.inputsContainer}>
      <Text style={styles.subtitleInputText}>¿Cuál es tu fecha de nacimiento?</Text>
      <TransparentCustomInput placeholder="DD / MM / AAAA" />
      <Text style={styles.textLegend}>
        *Tu perfil muestra tu edad, no tu fecha de nacimiento.
      </Text>
    </View>

    <View style={styles.inputsContainer}>
      <Text style={styles.subtitleInputText}>¿Cuál es tu ciudad?</Text>
      <TransparentCustomInput placeholder="Ingresa tu ciudad" />
    </View>

    <View style={styles.inputsContainer}>
      <Text style={styles.subtitleInputText}>¿De dónde eres?</Text>
      <View style={styles.dropdownContainer}>
        <CountryDropdown />
      </View>
    </View>
  </View>
);

interface ComplexionSectionProps {
  selectedComplexion: Complexion | null;
  onSelect: (complexion: Complexion) => void;
}

const YourComplexionSection: React.FC<ComplexionSectionProps> = ({ selectedComplexion, onSelect }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.titleSectionText}>¿Cuál es tu complexión?</Text>
    <View style={styles.SelectionComponentContainer}>
      <SelectionComponent
        icon={<SlimSelectComponentIcon />}
        text="Delgado"
        isActive={selectedComplexion === 'Delgado'}
        onPress={() => onSelect('Delgado')}
      />
      <SelectionComponent
        icon={<AthleticSelectComponentIcon />}
        text="Atlético"
        isActive={selectedComplexion === 'Atlético'}
        onPress={() => onSelect('Atlético')}
      />
      <SelectionComponent
        icon={<SlimSelectComponentIcon />}
        text="Normal"
        isActive={selectedComplexion === 'Normal'}
        onPress={() => onSelect('Normal')}
      />
      <SelectionComponent
        icon={<PlumpSelectComponentIcon />}
        text="Rellenito"
        isActive={selectedComplexion === 'Rellenito'}
        onPress={() => onSelect('Rellenito')}
      />
      <SelectionComponent
        icon={<StrongSelectComponent />}
        text="Fuerte"
        isActive={selectedComplexion === 'Fuerte'}
        onPress={() => onSelect('Fuerte')}
      />
    </View>
  </View>
);

interface SelectionSectionProps {
  selectedGender: Gender | null;
  onSelect: (gender: Gender) => void;
}


const YourGenderSection: React.FC<SelectionSectionProps> = ({ selectedGender, onSelect }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.titleSectionText}>¿Cuál es tu género?</Text>
    <View style={styles.SelectionComponentContainer}>
      <SelectionComponent
        icon={<WomenSelectionComponentIcon />}
        text="Mujer"
        isActive={selectedGender === 'Mujer'}
        onPress={() => onSelect('Mujer')}
      />
      <SelectionComponent
        icon={<MenSelectionComponentIcon />}
        text="Hombre"
        isActive={selectedGender === 'Hombre'}
        onPress={() => onSelect('Hombre')}
      />
      <SelectionComponent
        icon={<OthersGenderSelectComponentIcon />}
        text="Otros"
        isActive={selectedGender === 'Otros'}
        onPress={() => onSelect('Otros')}
      />
    </View>
  </View>
);

const YourHeightSection = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.titleSectionText}>¿Cuál es altura?</Text>
      <View style={styles.inputsContainer}>
        <Text style={styles.subtitleInputText}>Altura (cms)</Text>
        <TransparentCustomInput 
          placeholder="Ej. 180cm"
        />
      </View>  
  </View>
  );
};

const YourLevelStudySection = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.titleSectionText}>¿Cuál es tu nivel de educación?</Text>
      <View style={styles.inputsContainer}>
        <Text style={styles.subtitleInputText}>Educación</Text>
          <View style={styles.dropdownContainer}>
            <EducationLevelDropdown />
          </View>
      </View>  
    </View>
  );
};

interface InterestSectionProps {
  selectedInterest: Interest[];
  onSelect: (interest: Interest) => void;
}

const InterestKnowingSection: React.FC<InterestSectionProps> = ({ selectedInterest, onSelect }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.titleSectionText}>¿A quién te interesa conocer?</Text>
    <View style={styles.SelectionComponentContainer}>
      <SelectionCheckComponent
        icon={<WomenSelectionComponentIcon />}
        text="Mujer"
        isActive={selectedInterest.includes('Mujer')}
        onPress={() => onSelect('Mujer')}
      />
      <SelectionCheckComponent
        icon={<MenSelectionComponentIcon />}
        text="Hombre"
        isActive={selectedInterest.includes('Hombre')}
        onPress={() => onSelect('Hombre')}
      />
      <SelectionCheckComponent
        icon={<OthersGenderSelectComponentIcon />}
        text="Otros"
        isActive={selectedInterest.includes('Otros')}
        onPress={() => onSelect('Otros')}
      />
    </View>
  </View>
);

const AgePreferenceSection = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.titleSectionText}>Preferencia de edad</Text>
      <Text style={styles.textAgePreference}>
      Elije un mínimo y un máximo de edad para las posibles personas.
      </Text>
      <MultiSliderRange 
        title="Rango de edad"
        minValue={18}
        maxValue={60}
      />
    </View>
  );
};

const DistancePreferenceSection = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.titleSectionText}>Preferencia de distancia</Text>
      <Text style={styles.textAgePreference}>
        Elije la distancia máxima a la que te gustaría que se ubicaran las posibles personas.
      </Text>
      <MultiSliderRange 
        title="Distancia"
        minValue={18}
        maxValue={60}
      />
    </View>
  );
};

const OneMoreStepSection = () => {
  return (
    <View style={styles.oneMoreStepSectionContainer}>
      <Text style={styles.titleSectionText}>Solo un paso más</Text>
      <View style={styles.inputsContainer}>
        <Text style={styles.subtitleInputText}>¿Cuál tu correo?</Text>
        <TransparentCustomInput 
          placeholder="ejemplo@mail.com"
          rightIcon={<PadlockFormIcon />}
          />
      </View>
      <View style={styles.inputsContainer}>
        <Text style={styles.subtitleInputText}>¿Cuál tu correo?</Text>
        <TransparentCustomInput 
          placeholder="••••••••"
          rightIcon={<EyeInputFormIcon />}
          />
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
    </View>     
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 25,
    backgroundColor: '#FFF',
    paddingBottom: 100,
  },
  titleText: {
    color: '#B4002D',
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    paddingBottom: 32,
  },
  sectionContainer: {
    gap: 16,
    paddingBottom: 32,
  },
  titleSectionText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 17,
    color: '#222',
    paddingBottom: 16,
  },
  subtitleInputText: {
    paddingLeft: 16,
    paddingBottom: 8,
    color: '#222',
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
  },
  inputsContainer: {},
  dropdownContainer: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  textLegend: {
    color: '#777',
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Inter_400Regular',
    paddingTop: 10,
  },
  textGenderLegend: {
    color: '#777',
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Inter_400Regular',
  },
  SelectionComponentContainer: {
    gap: 10,
  },
  oneMoreStepSectionContainer: {
    gap: 16,
  },
  textAgePreference: {
    color: '#777',
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Inter_400Regular',
    paddingBottom: 20,
  },
  termsConditionsContainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 8,
  },
  termsConditionsTextContainer: {
    flex: 1,
    paddingLeft: 12,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textSection: {},
  regularText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#777',
    lineHeight: 16,
  },
  termsConditionsText: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: '#B4002D',
    lineHeight: 16,
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
    lineHeight: 16,
  },
  buttonContainer: {
    paddingBottom: 100,
  },
});

export default RegistrationScreen;