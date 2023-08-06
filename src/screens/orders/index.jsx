import { View, TouchableOpacity, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "./style";
import { useGetOrdersQuery } from "../../store/orders/api";
import { OrderItem } from "../../components";

const Orders = () => {

    const { data, error, isLoading } = useGetOrdersQuery()

    const renderItem = ({ item }) => <OrderItem  {...item} />

    const keyExtractor = (item) => item.id.toString();

    return (
        <View style={styles.container}>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            />
        </View>
    )
}

export default Orders