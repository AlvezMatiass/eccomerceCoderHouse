import { View, Text } from 'react-native'
import { styles } from './style'

const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;