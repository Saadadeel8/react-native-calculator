import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import { Styles } from "../styles/GlobalStyles";

export default function Key(props) {
  const {
    title,
    onPress,
    isBlue,
    isGray,
  } = props
  return (
    <TouchableOpacity
      style={isBlue ? Styles.btnBlue : isGray ? Styles.btnGray : Styles.btnDark}
      onPress={onPress}
    >
      <Text style={Styles.textOnButton}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
