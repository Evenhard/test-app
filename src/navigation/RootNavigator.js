import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HeaderButtons} from '../components';
import {
    HomeScreen,
    ProductScreen,
    CartScreen,
    ProductsListScreen,
    OrderScreen,
    OrderHistoryScreen
} from '../screens';
import {
    NAVIGATION_TO_HOME_SCREEN,
    NAVIGATION_TO_PRODUCTS_LIST_SCREEN,
    NAVIGATION_TO_PRODUCT_SCREEN,
    NAVIGATION_TO_CART_SCREEN,
    NAVIGATION_TO_ORDER_SCREEN,
    NAVIGATION_TO_ORDER_HISTORY_SCREEN
} from './routes';
import {COLORS} from '../styles';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import {addToCart} from '../store/actions';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    const dispatch = useDispatch();
    return (
        <Stack.Navigator initialRouteName={NAVIGATION_TO_HOME_SCREEN}>
            <Stack.Screen
                component={HomeScreen}
                name={NAVIGATION_TO_HOME_SCREEN}
                options={({navigation}) => ({
                    title: 'Sionic Shop',
                })}
            />
            <Stack.Screen
                name={NAVIGATION_TO_PRODUCTS_LIST_SCREEN}
                component={ProductsListScreen}
                options={({route}) => ({
                    title: route.params.title,
                })}
            />
            <Stack.Screen
                name={NAVIGATION_TO_PRODUCT_SCREEN}
                component={ProductScreen}
                options={({navigation, route}) => ({
                    title: route.params.title,
                    headerRight: () => (
                        <HeaderButtons>
                            <HeaderButtons.Item
                                title={'Cart'}
                                iconName="add-shopping-cart"
                                onPress={() => dispatch(addToCart(route.params.product))}
                            />
                        </HeaderButtons>
                    ),
                })}
            />
        </Stack.Navigator>
    );
};

const CartStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={NAVIGATION_TO_CART_SCREEN}>
            <Stack.Screen
                component={CartScreen}
                name={NAVIGATION_TO_CART_SCREEN}
                options={({navigation}) => ({
                    title: 'Корзина',
                })}
            />
            <Stack.Screen
                component={OrderScreen}
                name={NAVIGATION_TO_ORDER_SCREEN}
                options={({navigation}) => ({
                    title: 'Заказ',
                })}
            />
        </Stack.Navigator>
    );
};

const OrdersStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={NAVIGATION_TO_ORDER_HISTORY_SCREEN}>
            <Stack.Screen
                component={OrderHistoryScreen}
                name={NAVIGATION_TO_ORDER_HISTORY_SCREEN}
                options={({navigation}) => ({
                    title: 'Мои заказы',
                })}
            />
        </Stack.Navigator>
    );
};

const Tab = createBottomTabNavigator();

const RootNavigator = ({counter}) => (
    <SafeAreaProvider>
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={TabBarStyle}>
                <Tab.Screen name={NAVIGATION_TO_HOME_SCREEN}
                            component={MainStackNavigator}
                            options={{
                                tabBarLabel: 'Каталог',
                                tabBarIcon: ({color, size}) => (
                                    <Icon name="grid-view" size={25} color={color}/>
                                ),
                            }}/>
                <Tab.Screen name={NAVIGATION_TO_CART_SCREEN}
                            component={CartStackNavigator}
                            options={{
                                tabBarLabel: 'Корзина',
                                tabBarIcon: ({color, size}) => (
                                    <Icon name="shopping-cart" size={25} color={color}/>
                                ),
                                tabBarBadge: counter > 0 ? counter : null,
                                unmountOnBlur: true
                            }}/>
                <Tab.Screen name={NAVIGATION_TO_ORDER_HISTORY_SCREEN}
                            component={OrdersStackNavigator}
                            options={{
                                tabBarLabel: 'Мои заказы',
                                tabBarIcon: ({color, size}) => (
                                    <Icon name="person" size={25} color={color}/>
                                ),
                                unmountOnBlur: true
                            }}/>
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
);

const TabBarStyle = {
    activeTintColor: COLORS.primaryColor,
    inactiveTintColor: '#AEC2EA',
    style: {
        backgroundColor: '#E6E6E7',
    },
    keyboardHidesTabBar: true,
};

const mapStateToProps = ({cart}) => {
    const {counter} = cart;
    return {
        counter,
    };
};

export default connect(mapStateToProps)(RootNavigator);
