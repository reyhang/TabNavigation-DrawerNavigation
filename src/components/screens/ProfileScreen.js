import React from 'react'
import { SafeAreaView, Text } from 'react-native';

export default function ProfileScreen() {
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
        My Profile
      </Text>
    </SafeAreaView>
  );
}
 