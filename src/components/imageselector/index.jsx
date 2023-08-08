import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../themes';
import { requestCameraPermissionsAsync, launchCameraAsync } from 'expo-image-picker'

const ImageSelector = ({ image, onSelect }) => {

    const verifyPermissions = async () => {
        const { status } = await requestCameraPermissionsAsync();
        if ( status !== 'granted') {
            Alert.alert(
                'Permission Denied',
                'You need to grant camera permissions',
                [{text: 'Ok'}]
            )
            return false
        }
        return true
    }

    const onHandlerPhoto = async () => {
        const isCameraPermissions = await verifyPermissions()
        if (!isCameraPermissions) return;
        const result = await launchCameraAsync({
            mediaTypes: 'Images',
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
            base64: true
        })
        if (result.canceled) {
            console.log("Selección de imagen cancelada");
        } else {
            console.log("Imagen seleccionada correctamente");
        }
        console.warn({result})
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.contentImage} onPress={onHandlerPhoto}>
                {
                    image ? (
                        <Image source={{uri: image}} style={styles.imageProfile} />
                    ) : (
                        <Ionicons name='camera' size={30} color={COLORS.text} />
                )}
            </TouchableOpacity>
        </View>
    )
}

export default ImageSelector;