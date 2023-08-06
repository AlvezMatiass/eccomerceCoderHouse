import { View, Text, FlatList } from 'react-native'
import { styles } from './style'
import { MENUS } from '../../constants/data/menus';
import { MenuItem } from '../../components';

const Setting = ({ navigation }) => {

    const onSelect = ({route}) => {
        navigation.navigate(route)
    }

    const renderItem = ({ item }) => <MenuItem {...item} onSelect={onSelect}/>

    const keyExtractor = (item) => item.id

    return (
        <View style={styles.container}>
            <FlatList 
            data={MENUS}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            />
        </View>
    )
}

export default Setting;