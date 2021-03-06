import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const BorderButton = ({ title, onPress, allCaps, style }) => {
  return (
    <TouchableOpacity style={[styles.buttonBackground, style]} onPress={onPress} activeOpacity={0.5}>
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
};

BorderButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  allCaps: PropTypes.bool
};

BorderButton.defaultProps = {
  allCaps: true,
};

// Replace with theming https://reactnavigation.org/docs/themes/
const styles = StyleSheet.create({
  buttonBackground: {
    backgroundColor: 'white',
    padding: 12,
    borderColor: '#21aa44',
    borderRadius: 6,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    color: '#21aa44',
    letterSpacing: 1,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
});

export default BorderButton;