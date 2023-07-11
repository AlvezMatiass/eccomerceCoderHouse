import { FlatList, SafeAreaView, View } from 'react-native';
import { CategoryItem, Header } from '../../components';
import { styles } from './style';
import CATEGORIES from '../../constants/data/categorias.json'

const Categories = ({ onSelectCategory }) => {

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <FlatList
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          data={CATEGORIES}
          renderItem={({ item }) => <CategoryItem {...item} onSelectCategory={onSelectCategory} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          />
        </View>
    </SafeAreaView>
  );
}

export default Categories;