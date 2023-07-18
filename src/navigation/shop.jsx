import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, ProductDetail } from "../screens";
import { COLORS } from "../themes";

const Stack = createNativeStackNavigator()

function ShopNavigator() {
    return(
        <Stack.Navigator 
        initialRouteName="Categories"
        screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.secundary
            },
            headerTitleStyle: {
                fontFamily: 'Inter-Bold',
                fontSize: 18
            },
            animation: 'slide_from_right'
        }}
        >
            <Stack.Screen name="Categories" component={Categories}/>
            <Stack.Screen name="Products" component={Products}/>
            <Stack.Screen name="ProductDetail" component={ProductDetail}/>
        </Stack.Navigator>
    )
}

export default ShopNavigator;