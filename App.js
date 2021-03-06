
import * as React from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

// tab page
import OrderPage from './dest/OrderPage/index'
import MyPage from './dest/MyPage/index'

// other page
import Login from './dest/Login/index'
import Detail from './dest/DetailPage/index'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const MainPage = createBottomTabNavigator(
  {
    Order: OrderPage,
    // MyPage: MyPage
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let labelName = 'default'
        let labelColor = focused ? '#1C7ED7' : '#aaaaaa'
        if (routeName === 'Home') {
          labelName = '菜单'
        } else if (routeName === 'Cart') {
          labelName = '购物车'
        } else if (routeName === 'Order') {
          labelName = '订单'
        } else if (routeName === 'MyPage') {
          labelName = '我的'
        }
        return <Text style={{ color: labelColor }}>{labelName}</Text>
      },
      // tabBarLabel: "菜单",
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName = 'cloud'
        let iconColor = focused ? '#1C7ED7' : '#aaaaaa'
        if (routeName === 'Home') {
          iconName = 'home'
        } else if (routeName === 'Cart') {
          iconName = 'shopping-cart'
        } else if (routeName === 'Order') {
          iconName = 'list'
        } else if (routeName === 'MyInfo') {
          iconName = 'user'
        }

        return <Icon
          name={iconName}
          size={25}
          color={iconColor}
        />
      },
    }),
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
  }
)

const stackNavigator = createStackNavigator({
  Home: {
    screen: MainPage,
    navigationOptions: () => ({
      header: null,
      headerBackTitle: null,
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null
    }),
  },
  Detail: {
    screen: Detail,
    navigationOptions: () => ({
      title: '订单详情'
    }),
  },
})

const RootPage = createAppContainer(stackNavigator)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: '#ccc'
  },
});
