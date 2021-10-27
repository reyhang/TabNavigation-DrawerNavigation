import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; //NavCont ile uygulamamızı sarıyoruz.
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/screens/HomeScreen';
import ExploreScreen from './src/components/screens/ExploreScreen';
import ProfileScreen from './src/components/screens/ProfileScreen';
import VectorIcons from "./src/components/Icons/Index"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const Tab = createBottomTabNavigator();

const screenName = {
  home:"Home",
  explore:"Explore",
  profile:"Profile"
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={route =>
          console.log(route.route.name) || {
            headerShown: false,
            tabBarActiveTintColor: 'lightblue',
            tabBarIcon:({focused}) => {
              const {name} = route.route

              let icon = ""

              if (name === screenName.home)
              { icon="home-outline" }
             
              if (name === screenName.profile)
              { icon="person"}

              return (
                <VectorIcons name={icon} size={24} focused={focused}/>
              )
              
             
            }
          }
        }>
        <Tab.Screen
          component={HomeScreen}
          name={screenName.home}
          options={{
            tabBarBadge:5,
            tabBarBadgeStyle:{backgroundColor:"pink",color:"white"}
           /*  tabBarIcon: ({focused}) => (
              <VectorIcons
                name="home-outline"
                size={24}
                focused={focused}
                focusedColor="lightblue"
              />
            ), */
          }}
        />
        <Tab.Screen
          component={ExploreScreen}
          name={screenName.explore}
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
          name={screenName.profile}
          options={{
            /* tabBarIcon: ({focused}) => (
              <VectorIcons name="person" size={24} focused={focused} />
            ), */
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
