import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 130,
        backgroundColor: COLORS.secundary,
        padding: 12,
        marginHorizontal: 12,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    detailContainer: {
        justifyContent: 'space-between',
        width: 180
    },
    productName: {
        fontSize: 14,
        fontFamily: 'Inter-Bold'
    },
    price: {
        fontSize: 14,
        fontFamily: 'Inter-Medium'
    },
    qty: {
        fontSize: 12,
        fontFamily: 'Inter-Regular'
    },
    buttonContainer:{
        flexDirection: 'row',
        gap: 32,
        marginTop: 4
    },
    addButton: {
    },
    addButtonText: {
        fontSize: 26,
        fontFamily: 'Inter-Regular',
    },
    removeButton: {
        backgroundColor: COLORS.background,
        paddingHorizontal: 12,
        borderRadius: 200
    },
    removeButtonText: {
        fontSize: 26,
        fontFamily: 'Inter-Regular',
    },
    imageContainer: {
        flex: 1
    },
    image: {
        height: 110,
        width: 110
    },
    deleteContainer: {
        marginRight: 12
    },
})