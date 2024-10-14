import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

interface GenderButtonProps {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  label: string;
  icon?: React.ComponentType<{ color: string }>;
  iconColor?: string;
  onPress?: () => void;
}

const GenderButton: React.FC<GenderButtonProps> = ({
  backgroundColor = "#FFF",
  borderColor = "#CCC",
  textColor = "#000",
  label,
  icon: Icon,
  iconColor = "#000",
  onPress
}) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor, borderColor }]} onPress={onPress}>
      {Icon && (
        <View style={styles.iconContainer}>
          <Icon color={iconColor} />
        </View>
      )}
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    height: 36,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconContainer: {
    marginRight: 4,
  },
  text: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
  },
});

export default GenderButton;
