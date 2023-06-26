import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Homepage from './Homepage';

const Iniciar = () => {
  const [mostrarHomepage, setMostrarHomepage] = useState(false);

  const handleIniciarSesionPress = () => {
    setMostrarHomepage(true);
  };

  if (mostrarHomepage) {
    return <Homepage />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Correo Electrónico</Text>
          <TextInput style={styles.input} placeholder="Escribe tu email" />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput style={styles.input} placeholder="Ingresa tu contraseña" secureTextEntry={true} />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleIniciarSesionPress}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FF3F34',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Iniciar;
