import { View, Text, ImageBackground } from 'react-native'
import { styles } from './style'
import PRODUCTS from '../../constants/data/products.json'

const ProductDetail = ({ navigation, route }) => {

    const { productId } = route.params

    const product = PRODUCTS.find((product) => product.id === productId)
    
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
            </View>
        </View>
    )
}

export default ProductDetail;