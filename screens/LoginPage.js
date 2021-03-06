import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import ColoredButton from '../components/ColoredButton';
import PasswordField from '../components/PasswordField';

const minPasswordLength = 8

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticating, setAuthenticating] = useState(false);

  // Hides toolbar when authenticating (After user click the login button) 
  React.useEffect(() => {
    navigation.setOptions({ headerShown: !isAuthenticating});
  }, [isAuthenticating]);

  if (isAuthenticating) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#21aa44"/>
        <Text style={{marginTop: 30}} color='#303030'>
          Authenticating your account...
        </Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }} >
      <View style={{ flex: 1 }}>
        <TextInput
          label="Email"
          value={email}
          style={{ marginBottom: 12 }}
          textContentType="emailAddress"
          placeholder="example@gmail.com"
          onChangeText={email => setEmail(email)}
        />

        <PasswordField
          style={{ marginBottom: 12 }}
          label="Password"
          password={password}
          setPassword={setPassword}
          minPasswordLength={minPasswordLength}
          errorMessage=""
        />

        <View style={styles.bottom}>
          <ColoredButton 
            title="Log in" 
            onPress={tryLogin}
          />
          <Text style={{ textAlign: 'center', marginTop: 12, color: '#757575', fontSize: 12 }}>
            Didn't receive confirmation instruction?
        </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const tryLogin = () => {
  setAuthenticating(true);

  setTimeout(() => {
    this.setAuthenticating(false);
  }, 2500);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingBottom: 36,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  coloredText: {
    color: '#21aa44',
  },
});

export default LoginPage;
