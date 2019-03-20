import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>KEVIN IS AWESOME!</Text>
        <Text>BUT SAM GETS THE CHEESE!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
