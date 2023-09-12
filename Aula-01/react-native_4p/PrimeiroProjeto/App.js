import { StatusBar } from 'react-native';
import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import HomePage from './src/pages/Home';



export default function App() {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#060607" barStyle="light-content"/>
      <Routes/>
      
    </NavigationContainer>
  );
}





