import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation }from '@react-navigation/native';
import Gengar from '../../assets/gifapp.gif';



 export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatble.Image
                animation="flipInY"
                source={require('../../assets/apiimage.webp')}
                style={{width:'100%'}}
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
        flex: 2,
        backgroundColor: '#060607',
        justifyContent: 'center',
        alignItems: ' center',

    },
    containerForm: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
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
        backgroundColor: '#060607',
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