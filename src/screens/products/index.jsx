import { View, TouchableOpacity, Text, FlatList, Image } from 'react-native'
import { Input } from '../../constants';
import { useState } from 'react';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import PRODUCTS from '../../constants/data/products.json'

const Products = ({ onHandleGoBack, categoryId }) => {

    const [search, setSearch] = useState('')
    const [borderColor, setBorderColor] = useState('')
    const [filteredProduct, setFilteredProduct] = useState([])

    const onHandleBlur = () => {

    }
    const onHandleChangeText = (text) => {
        setSearch(text)
        filterBySearch(text)
    }

    const onHandleFocus = () => {

    }

    const filteredProductsByCategory = PRODUCTS.filter((product) => product.categoryId === categoryId);

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

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input 
                onHandleChangeText={onHandleChangeText}
                onHandleBlur={onHandleBlur}
                onHandleFocus={onHandleFocus}
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
                <View style={styles.productContainer}>
                    <Image source={{uri: item.image}} style={styles.productImage}/>
                    <View style={styles.productDetail}>
                        <Text style={styles.productsText} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                        <Text style={styles.productPrice}>{`${item.currency.code} ${item.price}`}</Text>
                    </View>
                    
                </View>
            )}
            />
            {
                filteredProduct.length === 0 && search.length > 0 && (
                    <View style={styles.notFound}>
                        <Text style={styles.notFoundText}>No products found</Text>
                    </View>
                )
            }
            <TouchableOpacity onPress={ onHandleGoBack } style={styles.buttonGoBack}>
                <Ionicons name="arrow-back" size={20} color="black" />
                <Text style={styles.goBackText}>Go back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Products;