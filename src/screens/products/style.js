import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: 'center',
        margin: 12,
        gap: 4,
    },
    buttonGoBack: {
        flexDirection: "row",
        justifyContent: 'center',
        margin: 24
    },
    goBackText: {
        fontSize: 14,
        fontFamily: 'Inter-Bold',
        marginHorizontal: 6
    },
    productContent: {
        flex: 1,
        marginHorizontal: 12,
    },
    productContainer:{
        alignItems: "center",
        width: '45%',
        marginHorizontal: 10,
        padding: 12,
        backgroundColor: COLORS.secundary
    },
    productImage:{
        width: '100%',
        height: 140,
    },
    productsText: {
        marginTop: 6,
        fontSize: 14,
        fontFamily: 'Inter-Regular'
    },
    productPrice: {
        fontFamily: 'Inter-Bold',
        fontSize: 15
    },
    notFound: {
        flex: 1,
        alignItems: 'center',
    },
    notFoundText: {
        fontSize: 16
    },
    closeInput: {
        position: "absolute",
        zIndex: 2,
        right: 5,
        top: 2.5,
    },
})