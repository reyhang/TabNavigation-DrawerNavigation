import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Button} from 'react-native-elements';
import AsyncStorage from "@react-native-async-storage/async-storage"



export default function LoginScreen() {

    const login = async () => {
      await AsyncStorage.setItem("projectKey",JSON.stringify({isLogin:true}))
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
        Login Please
      </Text>

      <Button
        title="Sign In"
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
        onPress={() => login()}
      />

    </SafeAreaView>
  );
}
