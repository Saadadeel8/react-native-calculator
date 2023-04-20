import React from 'react';
import { View } from 'react-native';
import Key from "./Key";
import { Styles } from "../styles/GlobalStyles";

export default function Keyboard(props) {
  const {
    displayData,
    setDisplayData,
  } = props

  const operations = ['+', '-', '*', '/', '(', ')', '=', '.']

  const handleOperationPress = (op) => {
    switch (op) {
      case '+/-':
        displayData[0] === '-' ? setDisplayData(displayData.substring(1)) : setDisplayData('-' + displayData);
        break;
      case '％':
        displayData ? setDisplayData(eval(displayData + '/100').toString()) : null;
        break;
      default:
        !displayData.length ? null : operations.includes(displayData.charAt(displayData.length - 1)) ? null : setDisplayData(displayData + op);
        break;
    }
  }
  const handleNumberPress = (num) => {
    setDisplayData(displayData + num)
  }
  const reset = () => {
    setDisplayData('')
  }
  const handleBackspace = () => {
    !displayData.length ? null : setDisplayData(displayData.substring(0, displayData.length - 1))
  }
  const getResult = () => {
    displayData ? setDisplayData(eval(displayData).toString()) : null
  }

  return (
    <View>
      <View style={Styles.row}>
        <Key title="C" isGray onPress={() => reset()}/>
        <Key title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
        <Key title="％" isGray onPress={() => handleOperationPress("％")} />
        <Key title="÷" isBlue onPress={() => handleOperationPress("/")} />
      </View>
      <View style={Styles.row}>
        <Key title="7" onPress={() => handleNumberPress("7")} />
        <Key title="8" onPress={() => handleNumberPress("8")} />
        <Key title="9" onPress={() => handleNumberPress("9")} />
        <Key title="×" isBlue onPress={() => handleOperationPress("*")} />
      </View>
      <View style={Styles.row}>
        <Key title="4" onPress={() => handleNumberPress("4")} />
        <Key title="5" onPress={() => handleNumberPress("5")} />
        <Key title="6" onPress={() => handleNumberPress("6")} />
        <Key title="-" isBlue onPress={() => handleOperationPress("-")} />
      </View>
      <View style={Styles.row}>
        <Key title="1" onPress={() => handleNumberPress("1")} />
        <Key title="2" onPress={() => handleNumberPress("2")} />
        <Key title="3" onPress={() => handleNumberPress("3")} />
        <Key title="+" isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Styles.row}>
        <Key title="." onPress={() => handleOperationPress(".")} />
        <Key title="0" onPress={() => handleNumberPress("0")} />
        <Key title="⌫" onPress={() => handleBackspace()} />
        <Key title="=" isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}

