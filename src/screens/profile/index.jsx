import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { styles } from './style'
import { ImageSelector } from '../../components';
import { useSelector } from 'react-redux';
import { useGetProfileQuery, useUpdateImageProfileMutation } from '../../store/profile/api';
import { COLORS } from '../../themes';

const Profile = () => {

    const localId = useSelector((state) => state.auth.user.localId)

    const [uploadImageProfile, { data, isLoading, error }] = useUpdateImageProfileMutation()
    const {data: userData, isLoading: isLoadingUserData} = useGetProfileQuery({localId})

    const onHandlerImage =  async ({uri, base64}) => {
       await uploadImageProfile({ localId, image: `data:image/jpeg;base64,${base64}` })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageSelector profileImage={userData?.profileImage} onSelect={onHandlerImage}/>
                {
                    isLoading && (
                        <View style={styles.loading}> 
                            <ActivityIndicator  size='large' color={COLORS.text} />
                        </View>
                )}
            </View>
        </View>
    )
}

export default Profile;