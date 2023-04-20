import { View } from 'react-native';
import Layout from "./src/Components/Layout";
import { Styles } from "./src/styles/GlobalStyles";

export default function App() {
  return (
    <View style={Styles.container}>
      <Layout />
    </View>
  );
}
