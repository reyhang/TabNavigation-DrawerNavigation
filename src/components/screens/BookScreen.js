import axios from 'axios';
import React, { useEffect } from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, FETCH_BOOK } from '../../redux/actionTypes';
import {fetchBooks} from '../../redux/actions'
export default function BookScreen() {

const dispatch = useDispatch()

const addItemToCart = item =>
  dispatch({type: ADD_TO_CART, payload: item});

const bookItems = useSelector(state => state.books)
/* 
async function fetchBooks () {
  const response = await axios.get("https://example-data.draftbit.com/books?_limit=1")
  try {
    if (response?.data) {

      dispatch({type:FETCH_BOOK, payload:response.data})
    } else {
      console.log("Response Hatası");
    } }
   catch (error) {
    console.log(error); 
  }} */

  useEffect(() => {
    dispatch(fetchBooks())

  }, [])
  

  function Seperator() {
    return <View style={{borderBottomWidth: 1, borderBottomColor: '#a9a9'}} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Book Screen</Text>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={bookItems}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => Seperator()}
        renderItem={({item}) => (
          <View style={styles.bookItemContainer}>
            <Image source={{uri: item.image_url}} style={styles.thumbnail} />

            <View>
              <Text style={styles.bookTitle}> {item.title} </Text>
              <Text style={styles.authorText}> {item.authors} </Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => addItemToCart(item)}>
                  <Text style={styles.button}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
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
    color:"black"
  },
  authorText: {
    fontSize: 18,
    fontWeight: '300',
    color:"black"
  },
  button: {
    backgroundColor:"#a5285144",
    fontSize:15,
    height:25,
    width:100,
    textAlign:"center",
    borderRadius:10,
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
})
