import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icons from "react-native-vector-icons/Ionicons"
import {useNavigation} from "@react-navigation/native"
import {useSelector} from "react-redux"

function ShoppingCartIcon() {


    const navigation = useNavigation()
    
    const cartItems = useSelector(state => state)

  

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={{marginRight: 13}}>
        <View
          style={{
            position: 'absolute',
            height: 30,
            width: 30,
            borderRadius: 15,
            backgroundColor: 'lightblue',
            zIndex:2000,
            right: 22,
            bottom: 10,
            alignItems:"center",
            justifyContent:"center"
          }}>
          <Text style={{color:"white",fontWeight:"bold"}}>{cartItems?.length?cartItems?.length:0}</Text>
        </View>
        <Icons name="ios-cart" size={30} />
      </TouchableOpacity>
    );
}

export default ShoppingCartIcon;