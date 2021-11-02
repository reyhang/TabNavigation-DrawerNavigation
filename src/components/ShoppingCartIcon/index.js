import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icons from "react-native-vector-icons/Ionicons"
import {useNavigation} from "@react-navigation/native"

function ShoppingCartIcon() {


    const navigation = useNavigation()          

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{marginRight: 13}}>
        <Icons name="ios-cart" size={30} />
      </TouchableOpacity>
    );
}

export default ShoppingCartIcon;