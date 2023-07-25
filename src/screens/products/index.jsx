import { View, Text, FlatList, useWindowDimensions} from 'react-native'
import { Input, ProductItem } from '../../components/index';
import { useState } from 'react';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const Products = ({ navigation, route }) => {

    const { categoryId } = route.params;

    const [search, setSearch] = useState('')
    const [borderColor, setBorderColor] = useState('')
    const [filteredProduct, setFilteredProduct] = useState([])

    const products = useSelector((state) => state.products.data)

    const onHandleChangeText = (text) => {
        setSearch(text)
        filterBySearch(text)
    }

    const filteredProductsByCategory = products.filter((product) => product.categoryId === categoryId);

    const filterBySearch = (query) => {
        let updateProductList = [...filteredProductsByCategory]

        updateProductList = updateProductList.filter((product) => {
            return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })

        setFilteredProduct(updateProductList)
    }

    const clearSearch = () => {
        setSearch('')
        setFilteredProduct([])
    }

    const onSelectProduct = ({productId}) => {
        navigation.navigate('ProductDetail', {productId})
    }

    const { width } = useWindowDimensions()

    const tabletMode = width > 640

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input 
                onHandleChangeText={onHandleChangeText}
                value={search}
                borderColor={borderColor}
                placeholder='search'
                />
                {
                    search.length > 0 && <Ionicons onPress={clearSearch} style={styles.closeInput} name="close-sharp" size={22} color="black" />
                }
            </View>
            
            <FlatList 
            data={search.length > 0 ? filteredProduct : filteredProductsByCategory}
            keyExtractor={(item) => item.id}
            style={styles.productContent}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
                <ProductItem item={item} onSelectProduct={onSelectProduct}/>
            )}
            />
            {
                filteredProduct.length === 0 && search.length > 0 && (
                    <View style={styles.notFound}>
                        <Text style={tabletMode ? styles.notFoundTablet : styles.notFoundText}>No products found</Text>
                    </View>
                )
            }
        </View>
    )
}

export default Products;