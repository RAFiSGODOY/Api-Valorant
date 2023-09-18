import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Text, Image, } from 'react-native';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';

const Desc = ({route}) => {
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
  
});

export default Desc;