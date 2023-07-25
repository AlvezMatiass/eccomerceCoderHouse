import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'
import ShopNavigator from "./shop";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import { COLORS } from "../themes";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTab.Navigator 
        initialRouteName="ShopTab" 
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
                fontFamily: 'Inter-Medium',
                fontSize: 10
            },
            tabBarActiveTintColor: COLORS.text,
            tabBarInactiveTintColor: COLORS.gray,
            tabBarIconStyle: {
                fontSize: 22
            },
            tabBarStyle: {
                height: 56,
                paddingTop: 10,
                paddingBottom: 4
            }
            }}>
            <BottomTab.Screen name="ShopTab" component={ShopNavigator} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home-outline" size={size} color={color} />
                )
            }}/>
            <BottomTab.Screen name="CartTab" component={CartNavigator} options={{
                tabBarLabel: 'Cart',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="cart-outline" size={size} color={color} />
                ),
                tabBarBadge: 2,
                tabBarBadgeStyle: {
                    fontSize: 10,
                    fontFamily: 'Inter-Bold'
                }
            }}/>
            <BottomTab.Screen name="OrdersTab" component={OrdersNavigator} options={{
                tabBarLabel: 'Orders',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="file-tray-outline" size={size} color={color} />
                )
            }}/>
        </BottomTab.Navigator>
    )
}

export default TabNavigator