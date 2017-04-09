import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//button component
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

//return button object
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

//styling
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ddd',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button} ;
