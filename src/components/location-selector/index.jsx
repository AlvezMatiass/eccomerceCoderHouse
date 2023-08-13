import { View, Text, Button, Alert } from 'react-native'
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location'
import { styles } from './style';
import { useState } from 'react';
import { COLORS } from '../../themes';
import MapPreview from '../mappreview';

const LocationSelector = ({ onLocation }) => {

    const [pickedLocation, setPickedLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant location permissions to use this app.',
        [{ text: 'Okay' }]
      );

      return false;
    }
    return true;
  };

  const onHandlerGetLocation = async () => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;

    const location = await getCurrentPositionAsync({
      accuracy: 6,
      timeInterval: 5000,
    });

    const { latitude, longitude } = location.coords;

    setPickedLocation({ lat: latitude, lng: longitude });
    onLocation({ lat: latitude, lng: longitude });
  };

    return (
        <View style={styles.container}>
            <MapPreview location={pickedLocation} style={styles.preview}>
                <Text style={styles.locationMessage}>No location chosen yet!</Text>
            </MapPreview>
            <Button
            title='Get user Location'
            onPress={onHandlerGetLocation}
            color={COLORS.text}
            />
        </View>
    )
}

export default LocationSelector;