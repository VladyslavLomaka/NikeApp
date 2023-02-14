import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {ProductsScreen} from './scr/screens/ProductsScreen';
import {ProductDetailsScreen} from './scr/screens/ProductDetailsScreen';
import {ShoppingCartScreen} from './scr/screens/ShoppingCartScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ProductDetailsScreen /> */}
      {/* <ProductsScreen /> */}
      <ShoppingCartScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
