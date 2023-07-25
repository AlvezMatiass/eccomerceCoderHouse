import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../store/cart/cartSlices'

const ProductDetail = ({ navigation, route }) => {

    const { productId } = route.params

    const dispatch = useDispatch()

    const products = useSelector((state) => state.products.data)

    const product = products.find((product) => product.id === productId)

    const onAddToCart = () => {
        dispatch(addToCart(product))
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