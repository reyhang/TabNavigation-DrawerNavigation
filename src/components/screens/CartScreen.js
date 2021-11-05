import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import VectorIcons from '../Icons/Index';
import {useDispatch, useSelector} from 'react-redux';
import {REMOVE_FROM_CART} from '../../redux/actionTypes';

export default function CartScreen() {

  const dispatch = useDispatch();
 
  

  const cartItems = useSelector(state => state.carts);
  /*Bir seçici işlevi kullanarak Redux depolama durumundan veri çıkarmanıza olanak tanır.*/

   

  const removeFromCart = payload => {
    dispatch({type: REMOVE_FROM_CART, payload});
  };

  function Seperator() {
    return <View style={{borderBottomWidth: 1, borderBottomColor: '#a9a9'}} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>C A R T</Text>
      

      {cartItems.length === 0 ? (
        <View
          style={{
            marginTop: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <VectorIcons name={'cart'} size={100} />
          <Text>Empty List</Text>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => Seperator()}
          renderItem={({item}) => (
            <View style={styles.bookItemContainer}>
              <Image source={{uri: item.image_url}} style={styles.thumbnail} />

              <View>
                <Text style={styles.bookTitle}> {item.title} </Text>
                <Text style={styles.authorText}> {item.authors} </Text>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={() => removeFromCart(item)}>
                    <Text style={styles.button}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffd2c9',
    fontSize: 45,
    margin: 15,
    textAlign: 'center',
    letterSpacing: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: 750,
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 10,
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  bookTitle: {
    fontSize: 22,
    fontWeight: '400',
    color: 'black',
  },
  authorText: {
    fontSize: 18,
    fontWeight: '300',
    color: 'black',
  },
  button: {
    backgroundColor: '#a5285144',
    fontSize: 15,
    height: 25,
    width: 100,
    textAlign: 'center',
    borderRadius: 10,
    color: 'white',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '300',
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10,
  },
});
