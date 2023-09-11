// /screens/ViewImageScreen.js

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/sunshine-9j.jpg')} // Thay đổi đường dẫn hình ảnh theo dự án của bạn
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default ViewImageScreen;
