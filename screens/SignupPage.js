import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Linking,
} from 'react-native';
import { TextInput, Checkbox, HelperText } from 'react-native-paper';
import ColoredButton from '../components/ColoredButton';
import PasswordField from '../components/PasswordField';

const minPasswordLength = 8

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }} >
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
        minPasswordLength={minPasswordLength}
        password={password}
        setPassword={setPassword}
      />

      <PasswordField
        label="Confirm Password"
        minPasswordLength={minPasswordLength}
        password={confirmPassword}
        setPassword={setConfirmPassword}
      />

      <View style={{ flexDirection: 'row', marginTop: 12 }}>
        <Checkbox
          status={agreedTerms ? 'checked' : 'unchecked'}
          onPress={() => setAgreedTerms(!agreedTerms)}
          color="#21aa44"
        />

        {/* Flex shrink is used to wrap the text to next line */}
        <Text style={{ flexShrink: 1, marginStart: 12 }}>
          <Text>I agree to Lanchat's </Text>
          <Text style={styles.coloredText} onPress={openTermServicesLink}>Terms of Service </Text>
          <Text>and </Text>
          <Text style={styles.coloredText} onPress={openTermServicesLink}>Privacy Policy</Text>
        </Text>
      </View>

      <View style={styles.bottom}>
        <ColoredButton title="Sign Up" />
        <Text style={{ textAlign: 'center', marginTop: 12, color: '#757575', fontSize: 12 }}>
          Didn't receive confirmation instruction?
        </Text>
      </View>
    </ScrollView>
  );
}

const openTermServicesLink = () => {
  Linking.openURL('http://www.google.com');
};

const submitSignup = () => {

};

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

export default SignupPage;