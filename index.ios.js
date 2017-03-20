// place code here for iOS

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => {
  return (
    <Header />
  );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
// Register component to the application
