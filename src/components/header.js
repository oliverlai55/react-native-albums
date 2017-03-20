// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component avialable to other parts of the app
export default Header;

// Flex Box styling
// justifyContent: adjust vertically
// alignItems: horizontal direction
