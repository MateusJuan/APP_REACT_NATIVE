import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mateus Juan Higino dos Santos 3A!</Text>
      <TouchableOpacity style={styles.botao} onPress={() => alert('Ihuuuuuuuuuuuuuuuuuuuulllllllll!') }>
        <Text style={styles.textoBotao}>Clique Aqui.</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
  },
  botao:{
    backgroundColor:'#00b800',
    marginTop:20,
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:10,
    alignItems:'center',
  },
  textoBotao:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
  },

});
