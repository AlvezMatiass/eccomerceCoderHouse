import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Address, Profile, Setting} from "../screens";

const Stack = createNativeStackNavigator();

function SettingNavigator() {
    return (
        <Stack.Navigator initialRouteName='Setting' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Setting" component={ Setting } />
            <Stack.Screen name="Profile" component={ Profile } />
        </Stack.Navigator>
    )
}

export default SettingNavigator