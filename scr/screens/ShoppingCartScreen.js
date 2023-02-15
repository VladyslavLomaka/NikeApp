import React from 'react';
import {FlatList, View, StyleSheet, Text, Pressable} from 'react-native';
import {CartListItem} from '../components/CartListItem';
import cart from '../data/cart';

const ShoppingCartTotal = () => (
  <View style={styles.totalsContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>4100$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>10$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textTotal}>Total</Text>
      <Text style={styles.textTotal}>4110$</Text>
    </View>
  </View>
);

export const ShoppingCartScreen = ({navigation}) => {
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({item}) => <CartListItem cartItem={item} />}
        keyExtractor={item => item.product.name}
        ListFooterComponent={ShoppingCartTotal}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    borderColor: 'gainsboro',
    borderTopWidth: 1,
    paddingTop: 10,
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textTotal: {
    fontWeight: 500,
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 30,
    margin: 10,
    padding: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
