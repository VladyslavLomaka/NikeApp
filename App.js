import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
// import {ProductsScreen} from './scr/screens/ProductsScreen';
import {ProductDetailsScreen} from './scr/screens/ProductDetailsScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductDetailsScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
