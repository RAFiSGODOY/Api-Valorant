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
                source={require('../../assets/Valorant_Postar_2.webp')}
                style={{height:"100%", marginTop:100,alignSelf:"center",}}
                resizeMode = "contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.ApresentaApp}>Desafie seus limites e domine o campo de batalha no mundo implacável de Valorant!</Text>
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
        marginBottom: 5,
        textAlign: 'center',
    },
    FÇlogin:{
        color: '#a1a1a1',
        textAlign: 'center',
        right: 3,
    },
    button: {
        position: 'absolute',
        backgroundColor: '#ff4655',
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