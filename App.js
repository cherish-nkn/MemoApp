import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from './src/components/AppBar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <SignupScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
