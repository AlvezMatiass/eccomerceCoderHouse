import { FlatList, SafeAreaView, View } from 'react-native';
import { CategoryItem } from '../../components'; 
import { styles } from './style';
import { useSelector } from 'react-redux';
import { useGetCategoriesQuery } from '../../store/categories/api';

const Categories = ({ navigation }) => {

  const { data, error, isLoading} = useGetCategoriesQuery() 
  
  const onSelectCategory = ({categoryId}) => {
    navigation.navigate('Products', {categoryId})
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <FlatList
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          data={data}
          renderItem={({ item }) => <CategoryItem {...item} onSelectCategory={() => {
            onSelectCategory({categoryId: item.id, name: item.name})
          }} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          />
        </View>
    </SafeAreaView>
  );
}

export default Categories;