import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Modal, KeyboardAvoidingView, Platform} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation }from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import { useRoute } from '@react-navigation/native';
 export default function Cadastro(){
    const navigation = useNavigation();
    const route = useRoute();
    const [email, setEmail] = useState(null)
    const [nome, setNome] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [password, setPassword] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [errorTelefone, setErrorTelefone] = useState(null)
    const [errorTotais, setErrorTotais] = useState(null)
    const [showModal, setShowModal] = useState(false);
    
    const validar = () => {
        let error = false
        setErrorEmail(null)
        setErrorTelefone(null)
        setErrorNome(null)
        setErrorPassword(null)
        const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(password == null && nome == null && email == null || !re.test(String(email).toLowerCase()) && telefone == null){
            setErrorTotais("Preencha todos os campos!")
            setShowModal(true);
            error = true
        }
        if(password == null || nome == null || email == null || !re.test(String(email).toLowerCase()) || telefone == null){
            setErrorTotais("Preencha todos os campos!")
            setShowModal(true);
            error = true
        }
       
        return !error

    }
    const salvar = () => {
        
        if(validar()){
            
            
            console.log("salvo com sucesso rafis")
            navigation.navigate("SignIn", { email, password})
        }
        

    }

    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                animation="flipInY"
                source={require('../../assets/paginacadastro.jpg')}
                style={{height:"120%", marginBottom:90,alignSelf:"center" , left:30}}
                resizeMode = "contain"
                />
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.ApresentaApp}>Cadastro</Text>
            <TextInput
            placeholder="Nome"
            onChangeText={value=> {setNome(value), setErrorNome(null)} }
            errorMessage={errorNome}
            style={styles.campoNome}
            returnKeyType='done'
            />
            <TextInputMask
            type={'cel-phone'}
            options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
            }}
            value={telefone}
            onChangeText={(text) => { setTelefone(text), setErrorTelefone(null) }}
            keyboardType="numeric"
            placeholder="Telefone"
            style={styles.campoTelefone}
            errorMessage={errorTelefone}
            returnKeyType='done'
            />
            <TextInput
            placeholder="E-mail"
            onChangeText={value=> {setEmail(value),setErrorEmail(null)}}
            keyboardType="email-address"
            style={styles.campoEmail}
            errorMessage={errorEmail}
            returnKeyType='done'
            />
            <TextInput
            placeholder="Password"
            onChangeText={value=> {setPassword(value),setErrorPassword(null)}}
            style={styles.campoSenha}
            errorMessage={errorPassword}
            returnKeyType='done'
            />

            <TouchableOpacity style={styles.button}
            onPress={() => salvar()}>
            <Text style={styles.buttontext}>cadastrar</Text>
            </TouchableOpacity>
            <Modal visible={showModal} transparent  animationType="fade">
                <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                <Image source={require('../../assets/logoalert.webp')}
                style={styles.imagealert}
                resizeMode = "contain"/>
                 <Text style={styles.modalMessage}>
                    {errorTotais}
                </Text>
                <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => setShowModal(false)}
                        >
                <Text style={styles.modalButtonText}>Ok</Text>
                </TouchableOpacity>
                </View>
                </View>
                </Modal>
                
            </Animatable.View>
        </View>
    );
 };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex:0,
    },
    imagealert: {
        width:200,
        height:300,
        alignSelf:"center",
        position:"absolute",
        bottom:-180,
    },
    modalContainer:{
        backgroundColor:"white",
        width:"90%",
        height:"30%",
        borderRadius:20,
        opacity:1,
        alignSelf:"center",
        top:225,
        borderColor:"red",
        borderWidth:2,
        

    },
    modalMessage :{
     fontSize:25,
     fontWeight: "bold",
     alignSelf:"center",
     top:10,
     color:"red",

    },
    modalButtonText: {
        backgroundColor: '#ff4655',
        paddingHorizontal:60,
        paddingVertical:10,
        alignSelf:"center",
        borderRadius:20,
        color:"white",
        top:140,
        fontWeight:"bold",

    },
    modalcontent: {
    alignItems:"center",
    position:"absolute",
    width:"30%",
    height:"30%",
    
    
    },
    campoNome:{
        paddingLeft: 10,
        height: 40,
        marginBottom: 10,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor: 'white', 
        borderWidth: 1,
        marginTop: 30,
        opacity:1,

    },
    campoEmail:{
        paddingLeft: 10,
        height: 40,
        marginBottom: 10,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor: 'white', 
        borderWidth: 1,
        marginTop: 20,
        opacity:1,

    },
    campoTelefone:{
        paddingLeft: 10,
        height: 40,
        marginBottom: 10,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor: 'white', 
        borderWidth: 1,
        marginTop: 20,
        opacity:1,

    },
    campoSenha:{
        paddingLeft: 10,
        height: 40,
        marginBottom: 0,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor: 'white', 
        borderWidth: 1,
        marginTop: 20,
        opacity:1,

    },
    containerLogo:{
        flex: 2.5,
        backgroundColor: '#060607',
        justifyContent: 'center',
        alignItems: ' center',
    },
    containerForm: {
        backgroundColor: 'transparent',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%',
        borderWidth:2,
        borderColor: '#ff4655',
        width:"95%",
        height:"96%",
        marginTop:10,
        marginLeft:10,
        position:"absolute",
        

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
        backgroundColor: '#ff4655',
        borderRadius: 50,
        paddingVertical: 8,
        width: '40%',
        alignSelf: 'center',
        top: 80,
        alignItems: 'center',
        justifyContent: 'center',
        position:"relative",
    },
    buttontext: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',

    },



})