import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Homepage from './Homepage';

const Crear = ({ handleGoBack }) => {
  const [mostrarHomepage, setMostrarHomepage] = useState(false);

  const handleCrearPress = () => {
    setMostrarHomepage(true);
  };

  if (mostrarHomepage) {
    return <Homepage />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Text style={styles.backButtonText}>Atrás</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Crear cuenta</Text>

      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput style={styles.input} placeholder="Escribe tu nombre" />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Correo Electrónico</Text>
          <TextInput style={styles.input} placeholder="Escribe tu email" />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Fecha de nacimiento</Text>
          <TextInput style={styles.input} placeholder="Escribe tu cumpleaños" />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput style={styles.input} placeholder="Ingresa una contraseña" secureTextEntry={true} />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Confirmar contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirma tu contraseña"
            secureTextEntry={true}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCrearPress}>
        <Text style={styles.buttonText}>Crear</Text>
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
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 16,
    color: '#FF3F34',
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

export default Crear;
