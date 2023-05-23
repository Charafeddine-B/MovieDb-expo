import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Filminfo from './src/components/Filminfo';

import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/MyStack';


export default function App() {
  return (


    <MyStack />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
