import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
import { CartItem } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { IncreaseItemQuantity, decreaseItemQuantity, RemoveItemQuantity, clearCart } from "../../store/cart/cartSlices";
import { useCreateOrderMutation } from "../../store/orders/api";

const Cart = ({ navigation }) => {

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart.items)

    const total = useSelector((state) => state.cart.total)

    const [createOrder, { data, error, isLoading}] = useCreateOrderMutation()

    const onIncreaseItem = (id) => {
        dispatch(IncreaseItemQuantity({ id }))
    }
    const onDecreaseItem = (id) => {
        dispatch(decreaseItemQuantity({ id }))
    }

    const onRemoveItem = (id) => {
        dispatch(RemoveItemQuantity({ id }))
    }

    const onCreateOrder = async () => {
        const newOrder = {
            id: Math.floor(Math.random() * 10000),
            items: cart,
            total,
            user: {
                id: 1,
                name: 'Matias Alvez',
                address: 'calle falsa 123',
                phone: '1122334455',
                email: 'matiasalvez2018@gmail.com'
            },
            paymenth: {
                method: 'VISA'
            },
            delivery: {
                method: 'CORREO ARGENTINO',
                trackingNumber: Math.floor(Math.random() * 10000)
            },
            createAt: Date.now(),
            finishedAt: '',
            };

            try {
            await createOrder(newOrder);
                dispatch(clearCart());
                navigation.navigate('OrdersTab');
            } catch (e) {
            }
    }

    if(cart.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.cartIsEmpty}>Your cart is empty</Text>
            </View>
        )
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
                <TouchableOpacity onPress={onCreateOrder}>
                    <View style={styles.checkoutButton}>
                        <View style={styles.totalContainer}>
                            <Text style={styles.cartTotalText}>Total:</Text>
                            <Text style={styles.cartTotalMoney}>${total}</Text>
                        </View>
                        <View style={styles.checkoutText}>
                            <Text style={styles.cartTotalText}>Checkout</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart