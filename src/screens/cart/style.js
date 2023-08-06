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
    checkoutButton: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkoutText: {
        justifyContent: 'center',
        marginRight: 18
    },
    totalContainer: {
        flexDirection: "row",
        paddingVertical: 18,
        paddingHorizontal: 24
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
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartIsEmpty: {
        fontFamily: 'Inter-Medium',
        fontSize: 16,
    }
})