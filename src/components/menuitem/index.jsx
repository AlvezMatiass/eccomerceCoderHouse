import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from './style'
import { COLORS } from '../../themes'

const MenuItem = ({ icon, title, route, onSelect }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelect( {route, title })}>
            <Ionicons name={icon} size={30} color={COLORS.text}/>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MenuItem;