import { View, Text, useWindowDimensions } from 'react-native'
import { styles } from './style'

const Header = ({title}) => {

    const { width } = useWindowDimensions()

    const tabletMode = width > 640

    return (
        <View style={tabletMode ? styles.containerTablet : styles.container}>
            <Text style={tabletMode ? styles.titleTablet : styles.title}>{title}</Text>
        </View>
    )
}

export default Header;