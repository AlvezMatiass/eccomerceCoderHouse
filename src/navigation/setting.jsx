import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Address, Profile, Setting} from "../screens";

const Stack = createNativeStackNavigator();

function SettingNavigator() {
    return (
        <Stack.Navigator initialRouteName='SettingMenu'>
            <Stack.Screen name="SettingMenu" component={ Setting } options={{
                title: 'Settings'
            }}/>
            <Stack.Screen name="Profile" component={ Profile } options={{
                animation: 'slide_from_right'
            }}/>
            <Stack.Screen name="Address" component={ Address } options={{
                animation: 'slide_from_right'
            }}/>
        </Stack.Navigator>
    )
}

export default SettingNavigator