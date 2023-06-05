import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { ComposeScreen } from './src/ComposeScreen';
import { MainScreen } from './src/MainScreen';
import {HomeScreen} from './src/HomeScreen';

class Home2Screen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Hello World!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
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
  },
});

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: Home2Screen,
    Details: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}