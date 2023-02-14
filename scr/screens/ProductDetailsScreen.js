import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import products from '../data/products';

const screenWidth = Dimensions.get('window').width;

export const ProductDetailsScreen = () => {
  const product = products[0];

  const addToCart = () => {
    console.log('added');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Image Carousel */}

        <FlatList
          data={product.images}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={styles.image} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        {/* Title */}

        <View style={styles.viewPadding}>
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>

          {/* Add to cart button */}
          <Pressable onPress={addToCart} style={styles.button}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewPadding: {
    padding: 20,
  },
  image: {
    width: screenWidth,
    aspectRatio: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 15,
    borderWidth: 1,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
