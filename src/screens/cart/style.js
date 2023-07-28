import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1
    },
    cartTotalContainer: {
        backgroundColor: COLORS.secundary,
    },
    totalContainer: {
        flexDirection: "row",
        paddingVertical: 18,
        paddingHorizontal: 24
    },
    checkoutButton: {
    },
    cartTotalText: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        paddingRight: 6,
    },
    cartTotalMoney: {
        fontSize: 16,
        fontFamily: 'Inter-Bold'
    },
})