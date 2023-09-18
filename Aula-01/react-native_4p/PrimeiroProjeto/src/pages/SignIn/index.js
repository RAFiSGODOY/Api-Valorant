import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Linking, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRoute } from '@react-navigation/native';

const schema = yup.object().shape({
  email: yup.string().required("Informe seu email, Agente!"),
  password: yup.string().required("Informe sua senha, Agente!"),
});

export default function Login() {
  const navigation = useNavigation();
  const route = useRoute();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { email: emailCadastro, password: passwordCadastro } = route.params || {};

  const onSubmit = (data) => {
    if (data.email === emailCadastro && data.password === passwordCadastro) {
      console.log('Acesso permitido');
      navigation.navigate('Home');
    } else {
      displayErrorModal('Email ou senha incorretos. Tente novamente.');
    }
  };

  const handleLinkPress = () => {
    const url = 'https://support-valorant.riotgames.com/hc/pt-br/articles/360046229573-Recupere-sua-conta#:~:text=Ferramenta%20Recuperação%20de%20Conta,-Recuperação%20de%20Nome&text=Recupere%20sua%20senha%20através%20do%20e-mail%20vinculado%20à%20sua%20conta.&text=Caso%20ainda%20não%20consiga%20acessar,a%20recuperação%20automática%20da%20conta.&text=Responda%20a%20uma%20série%20de%20perguntas%20para%20recuperar%20sua%20conta%20perdida.';
    Linking.openURL(url);
  };

  const displayErrorModal = (message) => {
    setErrorMessage(message);
    setShowErrorModal(true);
  };

  const hideErrorModal = () => {
    setShowErrorModal(false);
  };

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
          defaultValue=""
          render={({ field }) => (
            <View style={styles.inputName}>
              <TextInput
                placeholder="Digite seu email"
                keyboardType="email-address"
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                style={{ flex: 1 }}
              />
            </View>
          )}
        />
        {errors.email && <Text style={styles.erroNome}>{errors.email.message}</Text>}

        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field }) => (
            <View style={styles.inputSENHA}>
              <TextInput
                placeholder="Digite sua senha"
                secureTextEntry={!showPassword}
                value={field.value}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
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
        {errors.password && <Text style={styles.erroSENHA}>{errors.password.message}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttontext}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonEsqueceuSenha} onPress={handleLinkPress}>
          <Text style={styles.Esenhatext}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCadrasto} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.cadastro}>Novo por aqui ? Cadastre-se!</Text>
        </TouchableOpacity>
      </Animatable.View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showErrorModal}
        onRequestClose={hideErrorModal}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.errorModalContainer}>
            <View style={styles.errorModalContent}>
              <Text style={styles.errorModalText}>{errorMessage}</Text>
              <TouchableOpacity
                style={styles.errorModalButton}
                onPress={hideErrorModal}
              >
                <Text style={styles.errorModalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGODOY: {
    flex: 1,
    backgroundColor: '#173154',
  },
  buttonCadrasto: {
    position: "absolute",
    top: 278,
    left: 107,
  },
  cadastro: {
    color: '#173154',
  },
  togglepassword: {
    position: "absolute",
    left: 265,
    top: 11,
  },
  mostrarsenha: {
    color: 'black',
    fontSize: 12,
  },
  iconPASSWORD: {
    alignSelf: 'center',
    alignContent: 'center',
    position: 'absolute',
  },
  backMed: {
    width: '140%',
    flex: 1,
    position: 'absolute',
    left: -15,
    top: 165,
  },
  bemvindo: {
    position: 'absolute',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
    color: "black",
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  containerform: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 30,
    paddingStart: '5%',
    paddingEnd: '5%',
    marginTop: 300,
    position: "relative",
  },
  title: {
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
    marginTop: -2,
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 0.5,
    zIndex: 2,
  },
  button: {
    backgroundColor: '#ff4655',
    width: '80%',
    borderRadius: 100,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 57,
    marginTop: 230,
    zIndex: 2,
    position: "absolute",
  },
  buttontext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonEsqueceuSenha: {
    marginTop: 300,
    alignSelf: 'center',
    zIndex: 2,
    position: "absolute",
  },
  Esenhatext: {
    color: '#173154',
    fontSize: 12,
    textDecorationLine: "underline",
  },
  erroNome: {
    alignSelf: 'flex-start',
    color: 'red',
    marginBottom: 20,
    marginTop: 128,
    left: 35,
    position: "absolute",
  },
  erroSENHA: {
    alignSelf: 'flex-start',
    color: 'red',
    marginBottom: 20,
    marginTop: 190,
    left: 35,
    position: "absolute",
  },
  errorModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  errorModalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  errorModalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'red',
  },
  errorModalButton: {
    backgroundColor: '#ff4655',
    borderRadius: 10,
    padding: 10,
    width: '50%',
    alignItems: 'center',
  },
  errorModalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});