import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from './style'
import { COLORS } from '../../../themes'

const CartItem = ({
    categoryId,
    name,
    id,
    price,
    image,
    currency,
    stock,
    quantity,
    onIncreaseItem,
    onDecreaseItem,
    onRemoveItem
}) => {
  return (
     <View style={styles.container}>
        <View style={styles.detailContainer}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.price}>{`${currency.code} ${price}`}</Text>
            <Text style={styles.qty}>{`qty: ${quantity} stock: ${stock}`}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={() => onIncreaseItem(id)} >
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.removeButton} onPress={() => onDecreaseItem(id)} >
                    <Text style={styles.removeButtonText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.imageContainer}>
            <Image source={{uri: image }} style={styles.image} />
        </View>
        <View style={styles.deleteContainer}>
            <TouchableOpacity onPress={() => onRemoveItem(id)}>
                <Ionicons name='trash-outline' size={20} color={COLORS.black} />
            </TouchableOpacity>
        </View>
     </View>
  )
}

export default CartItem