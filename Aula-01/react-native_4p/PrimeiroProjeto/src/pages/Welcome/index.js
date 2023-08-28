import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation }from '@react-navigation/native';



 export default function Welcome(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                animation="flipInY"
                source={require('../../assets/gifapp.gif')}
                style={{height:600, marginTop:104,alignSelf:"center",marginRight:90,}}
                resizeMode = "contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.ApresentaApp}>Conecte-se ao fascinante mundo dos Pokémons através da nossa API e desbloqueie um universo de informações e aventuras.</Text>
            <Text style={styles.FÇlogin}>Faça o login para começar</Text>
            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={styles.buttontext}>Entrar</Text>
            </TouchableOpacity>
            </Animatable.View>
            


        </View>
    );
 };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#060607',
    },
    containerLogo:{
        flex: 2.5,
        backgroundColor: '#060607',
        justifyContent: 'center',
        alignItems: ' center',
        marginTop: -100,

    },
    containerForm: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%',

    },
    ApresentaApp:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 12,
        textAlign: 'center',
    },
    FÇlogin:{
        color: '#a1a1a1',
        textAlign: 'center',
        right: 3,
    },
    button: {
        position: 'absolute',
        backgroundColor: '#3d5eb4',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontext: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',

    },



})