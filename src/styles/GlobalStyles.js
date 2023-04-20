import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
  //
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Button
  btnBlue: {
    width: 82,
    height: 82,
    borderRadius: 24,
    backgroundColor: myColors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnDark: {
    width: 82,
    height: 82,
    borderRadius: 24,
    backgroundColor: myColors.btnDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnGray: {
    width: 82,
    height: 82,
    borderRadius: 24,
    backgroundColor: myColors.btnGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: myColors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.black,
  },
  // Keyboard
  row: {
    maxWidth: '100%',
    flexDirection: "row",
  },
  viewBottom: {
    position: 'absolute',
    bottom: 50,
  },
  screenDisplay: {
    fontSize: 36,
    color: myColors.gray,
    fontWeight: '200',
    alignSelf: "flex-end",
  },
  textOnButton: {
    color: myColors.white,
    fontSize: 32,
  }
})
