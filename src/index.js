import { ActivityIndicator, SafeAreaView, View} from 'react-native';
import { Header } from './constants';
import { styles } from './style';
import { Categories, Products } from './screens';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { COLORS } from './themes';

export default function App() {

  const [loaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf')
  })

  const [isCategorySelected, setIsCategorySelected] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState(null)

  const headerTitle = isCategorySelected ? 'Products' : 'Categories'

  const onHandleSelectedCategory = (categoryId) => {
    setSelectedCategory(categoryId)
    setIsCategorySelected(!isCategorySelected)
  }

  const onHandleNavigate = () => {
    setIsCategorySelected(!isCategorySelected)
    setSelectedCategory(null)
  }

  if(!loaded) {
    return  (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.secundary}/>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Header title={headerTitle}/>
          { isCategorySelected ? (
            <Products onHandleGoBack={onHandleNavigate} categoryId={selectedCategory} />
          ) : (
            <Categories onSelectCategory={onHandleSelectedCategory}/>
          )
          }
        </View>
    </SafeAreaView>
  );
}