import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation }from '@react-navigation/native';



 export default function Cadastro(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                animation="flipInY"
                source={require('../../assets/paginacadastro.jpg')}
                style={{height:"130%", marginTop:10,alignSelf:"center", left:30}}
                resizeMode = "contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.ApresentaApp}>Cadastro</Text>
            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={styles.buttontext}>cadastrar</Text>
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
        

    },
    containerForm: {
        position:"absolute",
        backgroundColor: 'transparent',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%',
        borderWidth:2,
        borderColor: '#ff4655',
        width:"98%",
        height:"80%",
        marginTop:70,
        marginLeft:4,

    },
    ApresentaApp:{
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
        textAlign: 'center',
        color:"white",
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
        width: '40%',
        alignSelf: 'center',
        bottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontext: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',

    },



})