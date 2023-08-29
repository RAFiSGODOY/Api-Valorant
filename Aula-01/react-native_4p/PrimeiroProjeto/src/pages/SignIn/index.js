import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { showMessage, hideMessage } from 'react-native-flash-message';


export default function Login() {
  const navigation = useNavigation();
  const { control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object({
    email: yup.string().required("Informe seu email, Agente!"),
    password: yup.string().required("Informe sua senha, Agente!"),
  });

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    
    const validar = () => {
        let error = false
        setErrorEmail(null)
        setErrorPassword(null)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(email).toLowerCase())){
         setErrorEmail("Preencha seu e-mail!")
         error = true
        }
        if(password == null){
            setErrorPassword("Preencha sua Senha!")
            error = true
            }
        return !error

    }
    const salvar = () => {
        if(validar()){
            console.log("salvo com sucesso rafis")
            navigation.navigate("Welcome")
        }
        

    }

  

  return (
    <View style={styles.containerGODOY} animation="flipInY">
      <Image
        source={require('../../assets/valorant.webp')}
        style={{ height: "70%", marginTop: 0, alignSelf: "center", position: "absolute" }}
        resizeMode="contain"
      />

      <Animatable.View animation="fadeInUp" delay={200} style={styles.containerform}>
        <Text style={styles.bemvindo}>Bem Vindo(a) Agente!</Text>
        <Image
        source={require('../../assets/logovava2.png')}
        style={{ height: "25%", marginTop: 340, alignSelf: "center", position: "absolute" }}
        resizeMode="contain"
      />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={[
              styles.inputName,
              {
                borderWidth: errors.email ? 0.5 : 0.5,
                borderColor: errors.email ? 'red' : 'black',
              },
            ]}>
              <TextInput
                onChange={value=> {setEmail(value), setErrorEmail(null)} }
                onBlur={onBlur}
                placeholder="Digite seu email"
                keyboardType="email-address"
                style={{ flex: 1 }}
              />
            </View>
          )}
        />
        {errors.email && <Text style={styles.erroNome}>{errors.email?.message}</Text>}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={[
              styles.inputSENHA,
              {
                borderWidth: errors.password ? 0.5 : 0.5,
                borderColor: errors.password ? 'red' : 'black',
              },
            ]}>
              <TextInput
                onChange={value=> {setPassword(value), setErrorPassword(null)} }
                onBlur={onBlur}
                placeholder="Digite sua senha"
                secureTextEntry={!showPassword}
                style={{ flex: 1 }}
              />
              <TouchableOpacity
                style={styles.togglepassword}
                onPress={() => setShowPassword(!showPassword)}>
                <Text style={styles.mostrarsenha}>
                  {showPassword ? "Ocultar" : "Mostrar"} Senha
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
        {errors.password && <Text style={styles.erroSENHA}>{errors.password?.message}</Text>}

        <TouchableOpacity style={styles.button} onPress={() => salvar()}>
          <Text style={styles.buttontext}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonEsqueceuSenha} onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.Esenhatext}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCadrasto} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.cadastro}>Novo por aqui ?Cadastre-se!</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create ({
    containerGODOY: {
        flex: 1,
        backgroundColor: '#173154',
        
    },
    buttonCadrasto:{
        position:"absolute",
        top:278,
        left:107,

    },
    cadastro:{
        color: '#173154',
    },
    togglepassword:{
        position:"absolute",
        left: 265,
        top:11,
    },
    mostrarsenha:{
        color:'black',
        fontSize:12,

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
        fontWeight: 'bold',
        marginTop: 20,
        alignSelf:'center',
        color:"black",


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
        flex:1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%',
        marginTop:300,
        position:"relative",
        opacity: 0.5,

    },
    title:{
        fontSize: 20,
        marginTop: 30,
        color: '#173154',
    },
    inputName: {
        paddingLeft: 10,
        height: 40,
        marginBottom: 25,
        fontSize: 16,
        backgroundColor: 'transparent',
        borderRadius: 30,
        borderColor: 'black', 
        borderWidth: 0.5,
        marginTop: 90,
        zIndex: 2,
        
      },
    
      inputSENHA: {
        paddingLeft: 11,
        height: 40,
        marginTop:-2,
        marginBottom: 10,
        fontSize: 16,
        borderRadius: 30, 
        borderColor: 'black', 
        borderWidth: 0.5,
        zIndex: 2,
        
        
      },
   
    button:{
       backgroundColor: '#ff4655',
       width: '80%',
       borderRadius: 100,
       paddingVertical: 8,
       justifyContent: 'center',
       alignItems:'center',
       marginLeft: 57,
       marginTop:230,
       zIndex: 2,
       position:"absolute",
    },
    buttontext :{
       color: 'white',
       fontSize: 18,
       fontWeight: 'bold', 

    },
    buttonEsqueceuSenha:{
        marginTop:300,
        alignSelf:'center',
        zIndex: 2,
        position:"absolute",
        
    },
    Esenhatext:{
        color:'#173154',
        fontSize:12,
        textDecorationLine: "underline",
    },

    erroNome: {
        alignSelf: 'flex-start',
        color: 'red',
        marginBottom: 20,
        marginTop: 128,
        left: 35,
        position:"absolute",


    },
    erroSENHA: {
        alignSelf: 'flex-start',
        color: 'red',
        marginBottom: 20,
        marginTop: 190,
        left: 35,
        position:"absolute",
        

    },
    
})
