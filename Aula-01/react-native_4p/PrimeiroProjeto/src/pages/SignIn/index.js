import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation }from '@react-navigation/native';



 export default function SignIn(){
    const navigation = useNavigation();
    const [RA, setRA] = useState('');
    const [Password, setPassword] = useState('');

    function handleSignIn(){
        //campos não preenchidos validação
        if(Password === "" && RA === ""){
            alert("Preencha seu R.A e sua senha para prosseguir!")
            return; // para a execução a partir daqui
        }else if(Password=== ""){
            alert("Por favor preencha sua senha!")
            return; // para a execução a partir daqui
        }else if(RA=== ""){
            alert("Por favor preencha seu R.A!")
            return; // para a execução a partir daqui
        }
        

        // mandano informação para o data
        const data= {
            RA,
            Password,
        }
        console.log(data);
    }
    return(
        <View style={styles.container} animation="flipInY">
            <Animatable.View animation= "fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>
                    Bem vindo(a)
                </Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" delay={200} style={styles.containerform}>
                <Text style={styles.title}>R.A</Text>
                <TextInput
                onChangeText={setRA}
                value={RA}
                placeholder="Digite seu R.A"
                style={styles.inputRA}
                
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput
                onChangeText={setPassword}
                value={Password}
                placeholder="Digite sua senha"
                style={styles.inputSENHA}
                secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}
                onPress={handleSignIn}>
                    <Text style={styles.buttontext}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonEsqueceuSenha}>
                    <Text style={styles.Esenhatext}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
 };
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#0c0634',
    },
    containerHeader :{
        marginTop: '14%',
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
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    inputRA:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12, 
        fontSize: 16,
    },
    inputSENHA:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12, 
        fontSize: 16,
    },
    button:{
       backgroundColor: '#0c0634',
       width: '100%',
       borderRadius: 4,
       paddingVertical: 8,
       marginTop: 14,
       justifyContent: 'center',
       alignItems:'center',
    },
    buttontext :{
       color: 'white',
       fontSize: 18,
       fontWeight: 'bold', 
    },
    buttonEsqueceuSenha:{
        marginTop:14,
        alignSelf:'center',
    },
    Esenhatext:{
        color:'#a1a1a1',
    }
})