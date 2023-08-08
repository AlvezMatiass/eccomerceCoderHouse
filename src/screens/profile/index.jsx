import { View, Text, FlatList } from 'react-native'
import { styles } from './style'
import { ImageSelector } from '../../components';

const Profile = () => {

    onHandlerImage = () => {}

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageSelector image={''} onSelect={onHandlerImage}/>
            </View>
        </View>
    )
}

export default Profile;