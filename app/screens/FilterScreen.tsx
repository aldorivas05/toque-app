import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import WomenIcon from "@/assets/icons/WomenIcon";
import MenIcon from "@/assets/icons/MenIcon";
import OtherGenderIcon from "@/assets/icons/OtherGenderIcon";
import GenderButton from "../components/common /GenderButton";
import MultiSliderRange from "../components/common /MultiSliderRange";
import ToggleSwitch from "../components/common /ToggleSwitch";
import FilterScreenButton from "../components/common /FilterButton";

const FilterScreen: React.FC = () => {
  const [activeGender, setActiveGender] = useState<string>("Mujer");

  const handleGenderPress = (gender: string) => {
    setActiveGender(gender);
  };

  return (
    <View style={styles.container}>
      <MultiSliderRange 
        title="Rango de edad"
        minValue={18}
        maxValue={60}
      />

      <MultiSliderRange 
        title="Distancia"
        minValue={18}
        maxValue={60}
      />

      <View style={styles.genderSection}>
        <Text style={styles.genderText}>Estoy interesado en</Text>
        <View style={styles.genderButtonsContainer}>
          <GenderButton 
            backgroundColor={activeGender === "Mujer" ? "#222" : "#FFFFFF"} 
            textColor={activeGender === "Mujer" ? "#FFFFFF" : "#222"} 
            label="Mujer" 
            icon={WomenIcon} 
            iconColor={activeGender === "Mujer" ? "#FFFFFF" : "#A1A1A1"}
            borderColor={activeGender === "Mujer" ? "transparent" : "#CCCCCC"}
            onPress={() => handleGenderPress("Mujer")}
          />

          <GenderButton 
            backgroundColor={activeGender === "Hombre" ? "#222" : "#FFFFFF"} 
            textColor={activeGender === "Hombre" ? "#FFFFFF" : "#222"} 
            label="Hombre" 
            icon={MenIcon} 
            iconColor={activeGender === "Hombre" ? "#FFFFFF" : "#A1A1A1"}
            borderColor={activeGender === "Hombre" ? "transparent" : "#CCCCCC"}
            onPress={() => handleGenderPress("Hombre")}
          />

          <GenderButton 
            backgroundColor={activeGender === "Otros" ? "#222" : "#FFFFFF"} 
            textColor={activeGender === "Otros" ? "#FFFFFF" : "#222"} 
            label="Otros" 
            icon={OtherGenderIcon} 
            iconColor={activeGender === "Otros" ? "#FFFFFF" : "#A1A1A1"}
            borderColor={activeGender === "Otros" ? "transparent" : "#CCCCCC"}
            onPress={() => handleGenderPress("Otros")}
          />
        </View>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.textSwitch}>Solo personas en linea</Text>
        <ToggleSwitch />
      </View>
      <View style={styles.ButtonsContainer}>
        <FilterScreenButton
          backgroundColor="#FFF"
          textColor="#B4002D"
          text="Borrar"
          hasBorder={true} 
        />
        <FilterScreenButton
          backgroundColor="#B4002D"
          textColor="#FFF"
          text="Aplicar"
          hasBorder={true} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    gap: 28,
    backgroundColor: '#FFF',
    paddingTop: 40
  },
  genderSection: {
    alignItems: 'flex-start',
    gap: 20,
  },
  genderText: {
    color: '#777',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Inter_400Regular',
  },
  genderButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 8
  },
  switchContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28
  },
  textSwitch: {
    textAlign: 'center',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#777'
  },
  ButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 24,
    gap: 10,
  }
});

export default FilterScreen;
