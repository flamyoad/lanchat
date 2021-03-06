import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';

const LoginTextBox = ({ label, placeholder }) => {
  return (
    <TextInput
      style={{ width: '80%', backgroundColor: '#FF303030', color: 'white' }}
      defaultValue={label}
      placeholder={placeholder}
      placeholderTextColor='#696969'
    />
  )
}

LoginTextBox.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

LoginTextBox.defaultProps = {
  placeholder: "",
}

const styles = StyleSheet.create({

});

export default LoginTextBox;

