import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, ProductDetail, Setting, Profile, Address } from "../screens";
import { COLORS } from "../themes";
import { Settings, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { styles } from "../components/header/style";
import SettingNavigator from "./setting";

const Stack = createNativeStackNavigator()

function ShopNavigator() {
    return(
        <Stack.Navigator 
        initialRouteName="Categories"
        screenOptions={({navigation}) => ({
            headerStyle: {
                backgroundColor: COLORS.secundary
            },
            headerTitleStyle: {
                fontFamily: 'Inter-Bold',
                fontSize: 18
            },
            animation: 'slide_from_right',
            headerRight: () => (
                <TouchableOpacity style={styles.settingIcon} onPress={() => navigation.navigate('Setting')}>
                    <Ionicons name="settings-outline" size={22} color={COLORS.black} />
                </TouchableOpacity>
            )
        })}
        >
            <Stack.Screen name="Categories" component={Categories}/>
            <Stack.Screen name="Products" component={Products}/>
            <Stack.Screen name="ProductDetail" component={ProductDetail}/>
            <Stack.Screen name="Setting" component={SettingNavigator} options={() => ({
                headerShown: false,
            })}/>
        </Stack.Navigator>
    )
}

export default ShopNavigator;