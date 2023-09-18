import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Text, Image, } from 'react-native';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';

const HomePage = ({}) => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAgents = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`);
      setAgents(data.data);
     
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  const EmptyListMessage = () => {
    return (
      <Text style={styles.emptyListStyle}>Nenhum agente encontrado.</Text>
    );
  };

  const handleDetalhes = (cardId) =>{
    navigation.navigate("Desc", {id : cardId});
  }

  return (
    <View style={styles.viewback}>
      <Text style={styles.header}>Home</Text>
      <Image
        source={require('../../assets/backvava.jpg')}
        style={{ height: "100%", width: "100%", position: "absolute" }}
        resizeMode="contain"
      />
      <Animatable.View style={styles.tela} animation="fadeInUp" delay={400}>
        <FlatList
          style={styles.flatlist1}
          data={agents}
          renderItem={({ item }) => (
            <View style={styles.agentCard}>
              <Text style={styles.back}>backgroundcard</Text>
              <Image source={{ uri: item.background }} style={styles.backImage} />
              <Text style={styles.agente}>
                Personagem:
                <Text style={styles.agentName}>{item.displayName}</Text>
              </Text>
              <Text style={styles.developer}>
                Desenvolvedor:
                <Text style={styles.devName}>{item.developerName}</Text>
              </Text>
              <Text style={styles.barrinha}>barrinha</Text>
              <TouchableOpacity style={styles.bottondetalhes}>
                <Text style={styles.textdetalhes}>Detalhes</Text>
              </TouchableOpacity>
              <Image source={{ uri: item.displayIcon }} style={styles.agentImage} />
            </View>
          )}
          keyExtractor={(item) => item.uuid}
          ListEmptyComponent={EmptyListMessage}
        />
        {loading && (
          <ActivityIndicator
            size="large"
            color="#dc9708"
            style={{ marginTop: 20, position: "absolute", alignSelf: "center" }}
          />
        )}
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  agentCard: {
    marginBottom: 5,
    marginTop:25,
    backgroundColor:"transparent",
    width:"96%",
    height:110,
    marginLeft:7,
    zIndex:0,
  },
  viewback:{
    backgroundColor:"black",

  },
  back:{
    position:"absolute",
    color:"transparent",
    backgroundColor:"#666",
    height:110,
    width:365,
    left:17,
    opacity:0.4,

  },
  sprayImage:{
    alignContent:"center",
    position:"absolute",
    zIndex:2,backgroundColor:"white",
    width:"50%",
     height:"50%",


    
  },
  flatlist1:{
    marginBottom:-100,
  },
  bottondetalhes:{
    textTransform: "uppercase",
    marginLeft:130,
    marginTop:68,
    position:"absolute",
    backgroundColor:"#ff4655",
    borderRadius:4,
    paddingLeft:35,
    paddingRight:35,
    paddingBottom:5,
    paddingTop:5,
    textAlign:"center",
    zIndex:1,
   
  },
  barrinha:{
    color:"transparent",
    backgroundColor:"#00ffb3",
    borderWidth:0.3,
    borderColor:"black",
    left:5,
    width:7,
    height:109.5,
    top:0.5,
    position:"absolute",
  },
  textdetalhes:{
    color:"white",
    fontSize:17,
    fontWeight:"bold",
    alignSelf:"center",

  },
  agentName:{
    fontSize:18,
    color:"#ff4655",
    fontWeight:"bold",
    textTransform: "uppercase",
    zIndex:1,

  },
  backImage:{
    width: 105,
    height: 110,
    resizeMode: 'cover',
    right:119,
    bottom:17,
    marginTop:17,
    backgroundColor:"#383a3d",
    alignSelf:"center",
    zIndex:0,

  },
  devName:{
    fontSize:10,
    color:"#ff4655",
    fontWeight:"bold",
    textTransform: "uppercase",
    zIndex:1,
  },
  developer:{
    fontSize:10,
    color:"white",
    fontWeight:"bold",
    textTransform: "uppercase",
    marginLeft:130,
    marginTop:43,
    textAlign:"center",
    position:"absolute",
    backgroundColor:"#353b39",
    borderRadius:5,
    paddingLeft:5,
    paddingRight:5,
    borderColor:"black",
    zIndex:1,

  },
  header:{
    backgroundColor:"#6666",
    zIndex:1,
    width:400,
    height: 22,
    position:"absolute",
    textAlign:"center",
    alignSelf:"center",
    fontWeight:"bold",
    borderBottomWidth:1,
    borderColor:"white",
    color:"white",
    opacity:0.9,


  },
  home:{
    fontSize:19,
    color:"#ff4655",
    fontWeight:"bold",
    textTransform: "uppercase",
    zIndex:1,
    alignSelf:"center",

  },
  agente:{
    fontSize:18,
    color:"white",
    fontWeight:"bold",
    textTransform: "uppercase",
    marginLeft:130,
    marginTop:10,
    position:"absolute",
    borderWidth:2,
    backgroundColor:"black",
    borderRadius:5,
    paddingLeft:2,
    paddingRight:2,
    textAlign:"center",
    zIndex:1,

  },
  
  agentImage: {
    width: 100,
    height: 100,
    marginLeft:20,
    marginTop:9.8,
    resizeMode: "cover",
    borderColor:"black",
    backgroundColor:"transparent",
    position:"absolute",
    zIndex:1,

  },
  emptyListStyle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize:20,
    color:"white",
    fontWeight:"bold",
    textTransform: "uppercase",
    textAlign:"center",
    position:"absolute",
    borderWidth:2,
    backgroundColor:"black",
    borderRadius:5,
    paddingLeft:3,
    paddingRight:3,
  },
  tela:{
    paddingBottom:100,

  },
});

export default HomePage;