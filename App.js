import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {ProductsScreen} from './scr/screens/ProductsScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductsScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
