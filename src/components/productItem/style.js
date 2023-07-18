import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    productContainer:{
        alignItems: "center",
        width: '45%',
        marginHorizontal: 10,
        padding: 12,
        backgroundColor: COLORS.secundary
    },
    productContainerTablet: {
        alignItems: "center",
        width: '45%',
        margin: 20,
        padding: 12,
        backgroundColor: COLORS.secundary
    },
    productImage:{
        width: '100%',
        height: 140,
    },
    productImageTablet: {
        width: '100%',
        height: 300,
    },
    productsText: {
        marginTop: 6,
        fontSize: 14,
        fontFamily: 'Inter-Regular'
    },
    productsTextTablet: {
        marginTop: 4,
        fontSize: 26,
        fontFamily: 'Inter-Medium'
    },
    productPrice: {
        fontFamily: 'Inter-Bold',
        fontSize: 15
    },
    productPriceTablet: {
        fontFamily: 'Inter-Bold',
        fontSize: 22
    },
})