import React from 'react';
import {View, Image, StyleSheet, FlatList, Pressable} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {productsSlice} from '../store/ProductsSlice';

export const ProductsScreen = ({navigation}) => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      renderItem={({item}) => {
        return (
          <View style={styles.itemContainer}>
            <Pressable
              onPress={() => {
                dispatch(productsSlice.actions.setSelectedProduct(item.id));
                navigation.navigate('Product Details');
              }}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.image}
              />
            </Pressable>
          </View>
        );
      }}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemContainer: {
    width: '50%',
    padding: 2,
  },
});
