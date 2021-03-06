import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes
} from '@react-native-google-signin/google-signin';
import ColoredButton from '../components/ColoredButton';
import BorderButton from '../components/BorderButton';

const appLogo = require('../assets/lan_party.png')

// todo: Add Google Sign in page
const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={appLogo} />
      <Text style={styles.appTitle}>
        Welcome to
        {'\n'}
        LANChat
      </Text>

      <Text style={styles.appDescription}>LAN Gaming Portal for Mobile</Text>

      <View style={styles.bottom}>
        <GoogleSigninButton
          style={{ marginBottom: 20, width: 300 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => {}} />

        <ColoredButton title="Create Account"
          style={{ marginBottom: 20 }}
          onPress={() => navigation.navigate('SignupPage')} 
        />

        <BorderButton title="Sign In" 
          onPress={() => navigation.navigate('LoginPage')}
        />

        <Text style={styles.footer}>Flamyoad Inc. 2021</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 40,
    paddingBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 12
  },
  appTitle: {
    letterSpacing: 2,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#474747',
    textTransform: 'uppercase'
  },
  appDescription: {
    color: '#474747',
    marginTop: 12,
    letterSpacing: 0.5
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  footer: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 32,
    color: '#676767'
  },
})

export default LandingPage;

