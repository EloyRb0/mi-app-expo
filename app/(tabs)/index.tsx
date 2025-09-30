import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Componente para el nombre
function Nombre() {
  return <Text style={styles.item}>Nombre: [Eloy Rodríguez Bonilla]</Text>;
}

// Componente para la matrícula
function Matricula() {
  return <Text style={styles.item}>Matrícula: [A00227629]</Text>;
}

// Componente para la carrera
function Carrera() {
  return <Text style={styles.item}>Carrera: [Ingeniería en Tecnologías Computacionales]</Text>;
}

// Componente para hobbies
function Hobbies() {
  return <Text style={styles.item}>Hobbies: [Ver peliculas, nadar, viajar]</Text>;
}

// Componente para último libro
function UltimoLibro() {
  return <Text style={styles.item}>Último libro que leí: [El Alquimista]</Text>;
}

// Componente para último viaje
function UltimoViaje() {
  return <Text style={styles.item}>Último viaje: [San Francisco]</Text>;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Información</Text>
      <Nombre />
      <Matricula />
      <Carrera />
      <Hobbies />
      <UltimoLibro />
      <UltimoViaje />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: { 
    fontSize: 24, 
    fontWeight: '700', 
    marginBottom: 20,
  },
  item: { 
    fontSize: 18, 
    marginBottom: 12,
  },
});