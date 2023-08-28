import { StatusBar } from 'react-native';
import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import MyButton from './src/pages/teste';
import FormField from './src/pages/teste';


export default function App() {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#060607" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
    
  );
}





