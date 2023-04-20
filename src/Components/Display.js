import React from 'react';
import { View, TextInput } from "react-native";
import { Styles } from "../styles/GlobalStyles";

function Display(props) {
  return (
    <View
      style={{
        height: 120,
        width: "90%",
        justifyContent: "flex-end",
        alignSelf: "center",
        bottom: 50,
      }}
    >
      <TextInput
        style={Styles.screenDisplay}
        defaultValue={props.displayData}
        editable={false}
        multiline={true}
        maxLength={9}
      />
    </View>
  );
}

export default Display;
