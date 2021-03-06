import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ColoredButton = ({ title, onPress, allCaps, style }) => {
  return (
    <TouchableOpacity style={[styles.buttonBackground, style]} onPress={onPress} activeOpacity={0.6}>
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
};

ColoredButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  allCaps: PropTypes.bool
};

ColoredButton.defaultProps = {
  allCaps: true,
};

// Replace with theming https://reactnavigation.org/docs/themes/
const styles = StyleSheet.create({
  buttonBackground: {
    backgroundColor: '#21aa44',
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    letterSpacing: 1,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
});

export default ColoredButton;