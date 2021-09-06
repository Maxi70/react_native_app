//import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    });

    setFontsLoaded(true);
  }

  if (!fontsLoaded) {
    return(<View/>);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/*<StatusBar style="auto" />*/}
      <Button>
        <Text style={styles.button}>Next</Text>
      </Button>
      <Button>
        <Text style={styles.button}>Previous</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#61dafb',
    justifyContent: 'center',
    borderRadius: 10,
    fontFamily: 'Roboto-Medium'
  }
});
