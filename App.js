import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import LandingPage from './screens/LandingPage';
import SignupPage from './screens/SignupPage';
import LoginPage from './screens/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#21aa44',
  },
}

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
          <Stack.Screen name="SignupPage" component={SignupPage} options={{ title: 'Sign Up' }}/>
          <Stack.Screen name="LoginPage" component={LoginPage} options={{ title: 'Log In' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
