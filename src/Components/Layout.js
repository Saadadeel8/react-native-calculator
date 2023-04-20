import React, { useState } from 'react';
import { View } from "react-native";
import Display from "./Display";
import Keyboard from "./Keyboard";
import { Styles } from "../styles/GlobalStyles";

function Layout(props) {
  const [displayData, setDisplayData] = useState('');

  return (
    <View style={Styles.viewBottom}>
      <Display
        displayData={displayData}
      />
      <Keyboard
        displayData={displayData}
        setDisplayData={setDisplayData}
      />
    </View>
  );
}

export default Layout;
