import React from 'react';
import {View, Image, StyleSheet, FlatList} from 'react-native';
import products from '../../scr/data/products';

export const ProductsScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => {
        console.log(item.image);
        return (
          <View style={styles.itemContainer}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
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
