import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
import { CartItem } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { IncreaseItemQuantity, decreaseItemQuantity, RemoveItemQuantity } from "../../store/cart/cartSlices";

const Cart = () => {

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart.items)

    const total = useSelector((state) => state.cart.total)

    const onIncreaseItem = (id) => {
        dispatch(IncreaseItemQuantity({ id }))
    }
    const onDecreaseItem = (id) => {
        dispatch(decreaseItemQuantity({ id }))
    }

    const onRemoveItem = (id) => {
        dispatch(RemoveItemQuantity({ id }))
    }

    return (
        <View style={styles.container}>
            <FlatList
            data={cart}
            renderItem={({ item }) => <CartItem {...item} onIncreaseItem={onIncreaseItem} onDecreaseItem={onDecreaseItem} onRemoveItem={onRemoveItem} />}
            key={(item) => item.id}
            style={styles.listContainer}
            />
            <View style={styles.cartTotalContainer}>
                <TouchableOpacity onPress={()=> {}} style={styles.checkoutButton}>
                    <View style={styles.totalContainer}>
                        <Text style={styles.cartTotalText}>Total:</Text>
                        <Text style={styles.cartTotalMoney}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart