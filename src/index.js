import { ActivityIndicator, SafeAreaView, View} from 'react-native';
import { styles } from './style';
import { useFonts } from 'expo-font';
import { COLORS } from './themes';
import RootNavigator from './navigation';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {

  const [loaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf')
  })
  
  if(!loaded) {
    return  (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.secundary}/>
      </View>
    )
  }

  return (
    <Provider store={store} >
      <SafeAreaView style={styles.container}>
          <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
}