import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: '100%',
        height: 240,
        backgroundColor: COLORS.secundary,
        borderBottomRightRadius: 180,
        borderBottomLeftRadius: 180
    },
    productContent: {
        margin: 12,
        gap: 4
    },
    productName: {
        fontSize: 20,
        fontFamily: 'Inter-Bold',
    },
    price: {
        fontFamily: 'Inter-Medium',
        fontSize: 16
    },
    description: {
        fontSize: 16
    },
    tagContainer:{
        flexDirection: 'row',
        gap: 8
    },
    tags: {
        fontFamily: 'Inter-Bold',
        fontSize: 12,
        padding: 4,
        paddingHorizontal: 8,
        backgroundColor: COLORS.backgroundItem,
        color: COLORS.white,
        borderRadius: 6
    },
})