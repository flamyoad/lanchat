import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
} from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

const PasswordField = ({ label, minPasswordLength, placeholder, errorMessage, password, setPassword }) => {
  const [isFirstInput, setFirstInput] = useState(true);
  
  const hasError = () => password !== "" && password.length < minPasswordLength;

  const onChangeText = password => {
    setPassword(password);
  }

  const onBlur = () => {
    if (password === '') {
      setFirstInput(true)
    } else {
      setFirstInput(false);
    }
  };

  return (
    <View>
      {/* onBlur is event emitted when the TextInput loses focus */}
      <TextInput
        label={label}
        secureTextEntry={true}
        textContentType="password"
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
      <HelperText type="error" visible={!isFirstInput && hasError()}>
        {errorMessage}
      </HelperText>
    </View>
  );
}

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  minPasswordLength: PropTypes.number.isRequired,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
};

PasswordField.defaultProps = {
  placeholder: "Must be more than 8 digits",
  errorMessage: "Must be more than 8 digits",
};

export default PasswordField;