import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { Icon } from 'react-native-elements';
import ShoppingList from '../screens/ShoppingList';
import AddShoppingList from '../screens/AddShoppingList';
import EditShoppingList from '../screens/EditShoppingList';
import ArchivedDetails from '../screens/ArchiveDetails';
import ShoppingDetails from '../screens/ShoppingDetails';
import Archived from '../screens/Archived';
import Colors from '../constants/Colors';

const color = focused => (focused ? Colors.primary : Colors.secondary);

const ShoppingListStack = createStackNavigator({
  ShoppingList,
  ShoppingDetails,
  AddShoppingList,
  EditShoppingList,
});

ShoppingListStack.navigationOptions = {
  tabBarLabel: 'СПИСКИ',
  tabBarIcon: ({ focused }) => (
    <Icon name="shopping-cart" type="feather" color={color(focused)} />
  ),
};

const ArchivedStack = createStackNavigator({
  Archived,
  ArchivedDetails,
});

ArchivedStack.navigationOptions = {
  tabBarLabel: 'АРХИВ',
  tabBarIcon: ({ focused }) => (
    <Icon name="archive" type="feather" color={color(focused)} />
  ),
};

export default createBottomTabNavigator({
  ShoppingListStack,
  ArchivedStack,
});
