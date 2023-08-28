import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Easing } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {useNavigation }from '@react-navigation/native';
import * as yup from 'yup';
import { TextInputMask } from 'react-native-masked-text';


const schema = yup.object({
    name: yup.string().required("Informe seu nome, Hunter!"),
    password : yup.string().required("Informe sua senha, Hunter!"),
    
})

    

 export default function SignIn(){
    const navigation = useNavigation();
    const { control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })
    const [showPassword, setShowPassword] = useState(false);
    function handleSignIn(data){
        console.log(data);
        
    }

    return(
        <View style={styles.containerGODOY} animation="flipInY">
            <Image
            source={require('../../assets/pokemonlogo.png')}
            style={styles.logomed} 
            resizeMode = "contain"
            
            />
            <Image
            source={require('../../assets/pokemonbk.png')}
            style={styles.logopokemon} 
            resizeMode = "contain"
            
            />
            
            <Animatable.View animation="fadeInUp" delay={200} style={styles.containerform}>
            <Text style={styles.bemvindo}>Bem Vindo(a) Hunter!</Text>
                    <Controller
                    control={control}
                    name="name"
                    render={( {field: {onChange, onBlur, value}}) => (
                        <View style={[
                            styles.inputName,
                            {
                                borderWidth: errors.name ? 1 : 1,
                                borderColor: errors.name ? 'red' : 'black',
                            },
                            ]}>
                                
                        <TextInput
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                    placeholder="Digite seu nome Hunter"
                    style={{ flex: 1 }}
                    />
                    
                    </View>
                    
                    )}
                    />
                    {errors.name && <Text style={styles.erroNome}>{errors.name?.message}</Text>}
                    
                    <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={[
                                styles.inputSENHA,
                                {
                                    borderWidth: errors.password ? 1 : 1,
                                    borderColor: errors.password ? 'red' : 'black',
                                },
                                ]}>
                                <TextInput
                                    onChangeText={onChange}
                                    value={value}
                                    onBlur={onBlur}
                                    placeholder="Digite sua senha Hunter"
                                    secureTextEntry={!showPassword}
                                    style={{ flex: 1 }}
                                    
                                />
                                
                                </View>
                            )}
                            />
                    {errors.password && <Text style={styles.erroSENHA}>{errors.password?.message}</Text>}
                   
                
               
                <TouchableOpacity style={styles.button}
                onPress={handleSubmit(handleSignIn)}>
                    <Text style={styles.buttontext}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonEsqueceuSenha} onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.Esenhatext}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
 };
const styles = StyleSheet.create ({
    containerGODOY: {
        flex: 1,
        backgroundColor: '#060607',
        
    },
    iconPASSWORD:{
        alignSelf: 'center',
        alignContent: 'center',
        position: 'absolute',

    },
    backMed:{
        width: '140%',
        flex: 1,
        position: 'absolute',
        left: -15,
        top: 165,


    },
    bemvindo:{
        position:'absolute',
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20,
        alignSelf:'center',


    },
    logomed:{
        flex:1,
        zIndex:3,
        width:'100%',
        marginTop:-190,
        

    },
    containerHeader :{
        marginTop: '15%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message :{
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        
    },
    containerform: {
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        marginTop: '20%',
        width:"100%",
        height:"40%",
    },
    title:{
        fontSize: 20,
        marginTop: 30,
        color: '#173154',
    },
    inputName: {
        paddingLeft: 10,
        height: 40,
        marginBottom: 12,
        marginTop: 10,
        fontSize: 16,
        backgroundColor: 'transparent',
        borderRadius: 30,
        borderColor: 'black', 
        borderWidth: 0.5,
        marginTop: 90,
        zIndex: 2,
      },
    
      inputSENHA: {
        paddingLeft: 10,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        borderRadius: 30, 
        borderColor: 'black', 
        borderWidth: 0.5,
        zIndex: 2,
        
      },
   
    button:{
       backgroundColor: '#3d5eb4',
       width: '80%',
       borderRadius: 100,
       paddingVertical: 8,
       marginTop: 14,
       justifyContent: 'center',
       alignItems:'center',
       marginLeft: 32,
       zIndex: 2,
    },
    buttontext :{
       color: 'white',
       fontSize: 18,
       fontWeight: 'bold', 

    },
    buttonEsqueceuSenha:{
        marginTop:25,
        alignSelf:'center',
        zIndex: 2,
        
    },
    Esenhatext:{
        color:'#fac705',
    },

    erroNome: {
        alignSelf: 'flex-start',
        color: 'red',
        marginBottom: 18,
        marginTop: -10,
        left: 15,


    },
    erroSENHA: {
        alignSelf: 'flex-start',
        color: 'red',
        marginBottom: 18,
        marginTop: -10,
        left: 15,
        

    },
    logopokemon: {
        width: "100%",
        height: "30%",
        position:"absolute",
        marginTop: 160,
        


    },
})
