import { View, Text, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native'
import { styles } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../store/cart/cartSlices'
import { useGetProductByIdQuery } from '../../store/products/api'
import { COLORS } from '../../themes'

const ProductDetail = ({ navigation, route }) => {

    const dispatch = useDispatch()

    const { productId } = route.params

    const { data, isLoading, error } = useGetProductByIdQuery(productId);

    const product = data?.find((product) => product.id === productId);



    const onAddToCart = () => {
        dispatch(addToCart(product))
    }

    if(isLoading) {
        return  (
          <View style={styles.loaderContainer}>
            <ActivityIndicator color={COLORS.secundary}/>
          </View>
        )
    }
        
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: product.image}} style={styles.image} resizeMode='contain'/>
            <View style={styles.productContent}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.price}>USD {product.price}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.tagContainer}>
                    {
                        product.tags.map((tags) => <Text key={tags} style={styles.tags}>{tags}</Text>)
                    }
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity onPress={onAddToCart} style={styles.buttomAddToCart} >
                        <Text style={styles.addToCartText}>Add to Cart</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </View>
    )
}

export default ProductDetail;