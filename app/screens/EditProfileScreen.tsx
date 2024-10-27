import React, { useState }             from "react";
import TransparentCustomInput          from "../components/common /TransparentCustomInput";
import PadlockFormIcon                 from "@/assets/icons/PadlockFormIcon";
import SelectionComponent              from "../components/common /SelectionComponent";
import WomenSelectionComponentIcon     from "@/assets/icons/WomenSelectionComponentIcon";
import CountryDropdown                 from "../components/common /CountryDropdown";
import MenSelectionComponentIcon       from "@/assets/icons/MenSelectionComponentIcon";
import OthersGenderSelectComponentIcon from "@/assets/icons/OthersGenderSelectComponentIcon";
import AthleticSelectComponentIcon     from "@/assets/icons/AthleticSelectComponentIcon";
import PlumpSelectComponentIcon        from "@/assets/icons/PlumpSelectComponentIcon";
import SlimSelectComponentIcon         from "@/assets/icons/SlimSelectComponentIcon";
import StrongSelectComponent           from "@/assets/icons/StrongSelectComponent";
import EducationLevelDropdown          from "../components/common /EducationLevelDropdown";
import SelectionCheckComponent         from "../components/common /SelectionCheckComponent";
import MultiSliderRange                from "../components/common /MultiSliderRange";
import EyeInputFormIcon                from "@/assets/icons/EyeInputFormIcon";
import ButtonComponent                 from "../components/common /ButtonComponent";
import { View, Text, StyleSheet, ScrollView } from "react-native";


type Gender = 'Mujer' | 'Hombre' | 'Otros';
type Complexion = 'Delgado' | 'Atlético' | 'Normal' | 'Rellenito' | 'Fuerte';
type Interest = 'Mujer' | 'Hombre' | 'Otros';


const EditProfileScreen: React.FC = () => {
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
      <YourInfoSection />
      <YourGenderSection selectedGender={selectedGender} onSelect={handleGenderSelect} />
      <YourHeightSection />
      <YourComplexionSection selectedComplexion={selectedComplexion} onSelect={handleComplexionSelect} />
      <YourLevelStudySection />
      <Text style={styles.titleText}>Sobre tus gustos</Text>
      <InterestKnowingSection selectedInterest={selectedInterest} onSelect={handleInterestSelect} />
      <AgePreferenceSection />
      <DistancePreferenceSection />
      <ChangePasswordSection />
    </ScrollView>
  );
};

const YourInfoSection = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.titleSectionText}>Tu información</Text>
      <Text style={styles.subtitleInputText}>Correo</Text>
      <View style={styles.inputsContainer}>
        <TransparentCustomInput 
          placeholder="Example@mail.com"
          rightIcon={<PadlockFormIcon />}
        />
      </View>
      <Text style={styles.subtitleInputText}>Ciudad</Text>
      <View style={styles.inputsContainer}>
        <TransparentCustomInput 
          placeholder="Madrid"
        />
      </View>
      <Text style={styles.subtitleInputText}>Pais</Text>
      <View style={styles.dropdownContainer}>
        <CountryDropdown />
      </View>
    </View>
  );
};

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
      <Text style={styles.subtitleInputText}>Altura (cms)</Text>
      <TransparentCustomInput 
          placeholder="180"
        />
  </View>
  );
};

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

const YourLevelStudySection = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.titleSectionText}>¿Cuál es tu nivel de educación?</Text>
      <Text style={styles.subtitleInputText}>Educación</Text>
          <View style={styles.dropdownContainer}>
            <EducationLevelDropdown />
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

const ChangePasswordSection = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.titleSectionText}>Cambiar contraseña</Text>
      <Text style={styles.subtitleInputText}>Contraseña actual</Text>
      <View style={styles.inputsContainer}>
        <TransparentCustomInput 
          placeholder="Contraseña actual"
          rightIcon={<EyeInputFormIcon />}
        />
      </View>  
      <Text style={styles.subtitleInputText}>Contraseña nueva</Text>
      <View style={styles.inputsContainer}>
        <TransparentCustomInput 
          placeholder="Contraseña nueva"
          rightIcon={<EyeInputFormIcon />}
        />
      </View> 
      <Text style={styles.subtitleInputText}>Confirma tu contraseña</Text>
      <View style={styles.inputsContainer}>
        <TransparentCustomInput 
          placeholder="Confirma tu contraseña"
          rightIcon={<EyeInputFormIcon />}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          title="Guardar cambios"
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
    paddingHorizontal: 24,
    paddingTop: 49,
    backgroundColor: '#FFF',
    paddingBottom: 100
  },
  dropdownContainer: {
    flexDirection: 'row',
  },
  titleText: {
    color: '#222',
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    paddingBottom: 32,
  },
  sectionContainer: {
    paddingBottom: 32
  },
  titleSectionText: {
    color: '#B4002D',
    fontSize: 17,
    fontFamily: 'Inter_600SemiBold',
    paddingBottom: 24,
  },
  subtitleInputText: {
    paddingLeft: 16,
    paddingBottom: 8,
    color: '#222',
    fontFamily: 'Inter_400Regular',
    fontSize: 12
  },
  inputsContainer: {
    paddingBottom: 16
  },
  SelectionComponentContainer: {
    gap: 10
  },
  textAgePreference: {
    color: '#777',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Inter_400Regular',
    paddingBottom: 20
  },
  buttonContainer:{
    paddingTop: 16,
    paddingBottom: 100
  }
})


export default EditProfileScreen;