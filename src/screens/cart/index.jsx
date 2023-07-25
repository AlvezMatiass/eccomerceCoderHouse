import { View, FlatList } from "react-native";
import { styles } from "./style";
import { CartItem } from "../../components";
import { useSelector } from "react-redux";

const Cart = () => {

    const cart = useSelector((state) => state.cart.items)

    return (
        <View style={styles.container}>
            <FlatList
            data={cart}
            renderItem={({ item }) => <CartItem {...item}/>}
            key={(item) => item.id}
            style={styles.listContainer}
            />
        </View>
    )
}

export default Cart