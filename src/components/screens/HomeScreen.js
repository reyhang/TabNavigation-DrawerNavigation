import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { SafeAreaView, Text } from 'react-native';
import {Button} from 'react-native-elements';

export default function HomeScreen () {

  const logout = async () => {
    await AsyncStorage.setItem("projectKey",JSON.stringify({isLogin:false}))
  }
    
    return (
<SafeAreaView style={{backgroundColor: 'white', height: 750}}>
      <Text
        style={{
          color: '#ffd2c9',
          fontSize: 45,
          margin: 15,
          textAlign: 'center',
          letterSpacing: 5,
        }}>
        Home Page
      </Text>

      <Button
        title="Çıkış Yap"
        type="outlined"
        titleStyle={{
          color: 'white',
        }}
        containerStyle={{
          padding: 5,
          backgroundColor: '#B0C4DE',
          borderRadius: 10,
          width: 200,
          alignSelf: 'center',
          marginVertical: 5,
        }}
        onPress={ async () => await logout() }
      />
    </SafeAreaView> )
}