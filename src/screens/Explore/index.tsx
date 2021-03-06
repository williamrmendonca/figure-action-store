import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getProducts } from '../../utils';

interface Props {
  id: string;
  image: any;
  width: number;
  height: number;
  other_images: any[];
  title: string;
  subtitle: string;
  price: string;
  about: string;
}

const Explore: React.FC = () => {
  const products = getProducts();

  const navigation = useNavigation();

  function onProductClicked(product: Props) {
    navigation.navigate('Product', { product })
  }

  const styles = StyleSheet.create({
    button: {
      width: 71,
      height: 24,
      borderRadius: 18,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.8
    },
    text: {
      fontWeight: '600',
      color: '#FFFFFF',
      fontSize: 14,
      lineHeight: 16,
    },
    textProduct: {
      color: '#2E2F33',
      fontSize: 14,
      lineHeight: 16,
      marginTop: 61,
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    productContainer: {
      width: 138,
      height: 155,
      backgroundColor: '#FFFFFF',
      marginTop: 160,
      marginLeft: 0,
      borderRadius: 18,
      opacity: 1,
      alignContent: 'center',
    },
    subText: {
      fontSize: 11,
      color: '#2E2F33',
      lineHeight: 11,
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    priceText: {
      marginTop: 28,
      color: '#010101',
      fontSize: 16,
      lineHeight: 18,
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    image: {
       width: 112, 
       height: 147, 
       position: 'absolute', 
       zIndex: 2, 
       marginTop: -90,
       flexDirection: 'row', 
       resizeMode: 'contain',
    },
  })

  return (
    <View style={{ flex: 1, backgroundColor: '#010101' }}>
        <View style={{ marginTop: 100, marginLeft: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={require('../../images/back.png')}/>
          <Image style={{ marginRight: 50, }} source={require('../../images/cart.png')}/>
        </View>     
        <Text style={{ fontSize: 30, lineHeight: 28, fontWeight: 'bold' ,color: '#FFFFFF', marginTop: 60, marginLeft: 30, }}>Explore</Text>
        <Text style={{ fontSize: 30, lineHeight: 28, fontWeight: 'bold' ,color: '#FFFFFF', marginTop: 0, marginLeft: 30, }}>Figure Actions</Text>
        <View style={{ backgroundColor: '#2E2F33', marginTop: 60, flex: 1, borderTopRightRadius: 40, borderTopLeftRadius: 40, }}>
          <View style={{ marginTop: 22, flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#BF4A45' }]}>
              <Text style={styles.text}>Games</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Animes</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Others</Text>  
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            {products.map((product) => {
                return (
                  <TouchableOpacity onPress={() => onProductClicked(product)} activeOpacity={0.7} key={product.id} style={styles.productContainer}>
                    <Image style={styles.image} source={product.image}/> 
                    <Text style={styles.textProduct}>{product.title}</Text>
                    <Text style={styles.subText}>{product.subtitle}</Text>
                    <Text style={styles.priceText}>{product.price}</Text>
                  </TouchableOpacity>
                )      
              })}
          </View>

          <View style={{ width: 11, flexDirection: 'row', marginTop: 116, marginLeft: 160, }}>
            <View style={{ width: 11, height: 11, backgroundColor: '#FFFFFF', borderRadius: 5, }}></View> 
            <View style={{ width: 9, height: 9, backgroundColor: '#FFFFFF', borderRadius: 4, marginLeft: 14, }}></View>  
            <View style={{ width: 9, height: 9, backgroundColor: '#FFFFFF', borderRadius: 4, marginLeft: 14, }}></View>  
          </View>
         
        </View>
    </View>
  );
}

export default Explore;