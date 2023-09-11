import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const navigateToViewImage = () => {
    navigation.navigate('ViewImage'); // Điều hướng sang màn hình ViewImage
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <Text>Welcome to Our App</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={navigateToViewImage} style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.registerButton}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  buttonsContainer: {
    width: '100%',
    padding: 20,
  },
  loginButton: {
    backgroundColor: '#fc5c65',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: '#4ECDC4',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
