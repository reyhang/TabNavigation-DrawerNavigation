import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native'; //NavCont ile uygulamamızı sarıyoruz.
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider as StoreProvider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import VectorIcons from './src/components/Icons/Index';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

import store from './src/redux/store';
import LoginScreen from './src/components/screens/LoginScreen';
import HomeScreen from './src/components/screens/HomeScreen';
import ExploreScreen from './src/components/screens/ExploreScreen';
import ProfileScreen from './src/components/screens/ProfileScreen';
import BookScreen from './src/components/screens/BookScreen';
import CartScreen from './src/components/screens/CartScreen';
import ShoppingCartIcon from './src/components/ShoppingCartIcon';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const screenName = {
  home: 'Home',
  explore: 'Explore',
  profile: 'Profile',
  login: 'Login',
  book: 'Book',
  cart: 'Cart',
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenName.home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={route => ({
        headerShown: false,
        tabBarActiveTintColor: 'lightblue',
        tabBarIcon: ({focused}) => {
          const {name} = route.route;

          if (name === screenName.profile) {
            icon = 'person';
          }

          if (name === screenName.login) {
            icon = 'ios-log-in-outline';
          }

          return <VectorIcons name={icon} size={24} focused={focused} />;
        },
      })}>
      <Tab.Screen component={StackNavigator} name={screenName.login} />

      <Tab.Screen
        component={HomeScreen}
        name={screenName.home}
        options={{
          tabBarBadge: 5,
          tabBarBadgeStyle: {backgroundColor: 'pink', color: 'white'},
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
        options={
          {
            /* tabBarIcon: ({focused}) => (
          <VectorIcons name="person" size={24} focused={focused} />
        ), */
          }
        }
      />
    </Tab.Navigator>
  );
};

function UserStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenName.home} component={HomeScreen} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenName.login} component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  //const isLogin = false; //Kullanıcının login olup olmama durumunu async storage'ta tutacağız.

  const [isLogin, setIsLogin] = useState(false);

  const getIsLogin = async () => {
    const response = await AsyncStorage.getItem('projectKey');
    const responseObject = JSON.parse(response);

    setIsLogin(responseObject.isLogin);
    {
      /* {isLogin ? UserStack() : AuthStack()} */
    }
  };
  useEffect(() => {
    getIsLogin();
  }, []);

  return (
    <StoreProvider store={store}>
      {/* Redux paketlerini kullanabilmek için StoreProvider ile uygulamamızı sarmamız gerekiyor. */}
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={screenName.book}
          screenOptions={{
            drawerActiveBackgroundColor: '#ffd2c9',
            drawerInactiveTintColor: 'grey',
            drawerActiveTintColor: 'white',
            headerBackgroundContainerStyle: {borderRadius: 3},
          }}>
          <Drawer.Screen
            name={screenName.profile}
            component={ProfileScreen}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcons name={'person'} size={20} />
              ),
            }}
          />
          <Drawer.Screen
            name={screenName.home}
            component={HomeScreen}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcons name={'home'} size={20} />
              ),
            }}
          />
          <Drawer.Screen
            name={screenName.explore}
            component={ExploreScreen}
            options={{
              drawerIcon: ({focused}) => (
                <FontAwesome5
                  name={'grav'}
                  size={25}
                  color={focused ? 'lightblue' : 'black'}
                />
              ),
            }}
          />
          <Drawer.Screen
            name={screenName.login}
            component={LoginScreen}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcons name={'person'} size={20} />
              ),
            }}
          />
          <Drawer.Screen
            name={screenName.book}
            component={BookScreen}
            options={{
              headerRight:props => <ShoppingCartIcon {...props} />,
              drawerIcon: ({focused}) => (
                <VectorIcons name={'book'} size={20} />
              ),
            }}
          />
          <Drawer.Screen
            name={screenName.cart}
            component={CartScreen}
            options={{
              drawerIcon: ({focused}) => (
                <VectorIcons name={'cart'} size={20} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}
