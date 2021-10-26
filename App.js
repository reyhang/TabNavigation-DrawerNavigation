import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; //NavCont ile uygulamamızı sarıyoruz.
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/screens/HomeScreen';
import ExploreScreen from './src/components/screens/ExploreScreen';
import ProfileScreen from './src/components/screens/ProfileScreen';
import VectorIcons from "./src/components/Icons/Index"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ 
        headerShown:false, 
        tabBarActiveTintColor:"lightblue"
      }}>
        <Tab.Screen
          component={HomeScreen}
          name="Home"
          options={{ 
            tabBarIcon: ({focused}) => (
              <VectorIcons
                name="home-outline"
                size={24}
                focused={focused}
                focusedColor="lightblue"
                
              />
            ),
            
          }}
        />
        <Tab.Screen
          component={ExploreScreen}
          name="Explore"
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome5
                name={'wpexplorer'}
                size={24}
                color={focused ? 'lightblue' : 'black'}
              />
            ),
          }}
        />
        <Tab.Screen
          component={ProfileScreen}
          name="Profile"
          options={{
            tabBarIcon: ({focused}) => (
              <VectorIcons
                name="person"
                size={24}
                focused={focused}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
