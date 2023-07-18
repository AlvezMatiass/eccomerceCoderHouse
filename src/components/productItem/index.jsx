import { Text, TouchableOpacity, View, Image, useWindowDimensions } from 'react-native'
import { styles } from './style';

const ProductItem = ({ item, onSelectProduct }) => {

    const { width } = useWindowDimensions()

    const tabletMode = width > 640

    return (
        <TouchableOpacity style={tabletMode ? styles.productContainerTablet : styles.productContainer} onPress={() => onSelectProduct({productId: item.id})}>
            <Image source={{uri: item.image}} style={tabletMode ? styles.productImageTablet : styles.productImage}/>
            <View style={styles.productDetail}>
                    <Text style={tabletMode ? styles.productsTextTablet : styles.productsText} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                    <Text style={tabletMode ? styles.productPriceTablet : styles.productPrice}>{`${item.currency.code} ${item.price}`}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem;