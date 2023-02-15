import React from 'react';
import {ProductsScreen} from './screens/ProductsScreen';
import {ProductDetailsScreen} from './screens/ProductDetailsScreen';
import {ShoppingCartScreen} from './screens/ShoppingCartScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pressable, StyleSheet, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Cart')}
                on
                style={styles.headerRightContainer}>
                <Text style={styles.text}>1</Text>
                <Feather name="shopping-cart" style={styles.icon} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{presentation: 'modal'}}
        />
        <Stack.Screen
          name="Cart"
          component={ShoppingCartScreen}
          options={{presentation: 'modal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 18,
    color: 'grey',
  },
  headerRightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  text: {
    fontWeight: 500,
    color: 'grey',
  },
});
