import { SafeAreaView, View} from 'react-native';
import { Header } from './components';
import { styles } from './style';
import { Categories, Products } from './screens';
import { useState } from 'react';

export default function App() {

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