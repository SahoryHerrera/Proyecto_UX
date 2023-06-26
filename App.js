import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import CrearScreen from './Crear';
import IniciarScreen from './Iniciar';

import logo from './img/logo.png';
import mochila from './img/mochila.png';
import silla from './img/silla.png';
import brujula from './img/brujula.png';

const App = () => {
  const data = [
    { id: '1', image: mochila, title: 'Encuentra tu hogar lejos del hogar.' },
    { id: '2', image: silla, title: '¿Listo para un descanso merecido?' },
    { id: '3', image: brujula, title: 'Tu próxima aventura te espera.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCrearScreen, setShowCrearScreen] = useState(false);
  const [showIniciarScreen, setShowIniciarScreen] = useState(false);

  const renderSlide = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.slideTitle}>{item.title}</Text>
    </View>
  );

  const handleCrearCuenta = () => {
    setShowCrearScreen(true);
  };

  const handleIniciarSesion = () => {
    setShowIniciarScreen(true);
  };

  const handleGoBack = () => {
    setShowCrearScreen(false);
    setShowIniciarScreen(false);
  };

  return (
    <View style={styles.container}>
      {!showCrearScreen && !showIniciarScreen ? (
        <View style={styles.splash}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.carouselContainer}>
            <FlatList
              data={data}
              renderItem={renderSlide}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.swiper}
              pagingEnabled
              onMomentumScrollEnd={(event) => {
                const slideIndex = event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width;
                setCurrentIndex(Math.round(slideIndex));
              }}
              getItemLayout={(data, index) => ({
                length: 250,
                offset: 250 * index,
                index,
              })}
              initialScrollIndex={currentIndex}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleCrearCuenta}>
            <Text style={styles.buttonText}>Crear cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleIniciarSesion}>
            <Text style={styles.loginButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      ) : showCrearScreen ? (
        <CrearScreen handleGoBack={handleGoBack} />
      ) : (
        <IniciarScreen handleGoBack={handleGoBack} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF4',
    padding: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splash: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: '10%',
    resizeMode: 'contain',
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  swiper: {
    flexGrow: 0,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  image: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
    marginBottom: '5%',
  },
  slideTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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
  loginButton: {
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FF3F34',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default App;
