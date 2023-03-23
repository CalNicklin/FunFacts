import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import store from "./src/store";
import Navigator from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <View style={Styles.statusBarContainer}>
        <StatusBar barStyle="light-content" />
      </View>
      <Navigator />
    </Provider>
  );
}

const Styles = StyleSheet.create({
  statusBarContainer: {
    width: "100%",
    height: 20,
    backgroundColor: 'black'
  },
});
