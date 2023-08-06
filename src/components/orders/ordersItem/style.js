import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
    orderItemContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 120,
        borderBottomWidth: .5,
        borderBottomColor: COLORS.gray
    },
    orderHeaderContainer: {
        flex: .8,
        backgroundColor: COLORS.primary,
        justifyContent:'center',
        alignItems: 'center'
    },
    orderItemDate: {
        fontFamily: 'Inter-Medium'
    },
    orderBody: {
        flex: 1,
        backgroundColor: COLORS.secundary,
        justifyContent:'center',
    },
    orderItemId: {
        fontFamily: 'Inter-Medium'
    },
    orderItemTotal: {
        fontFamily: 'Inter-Bold'
    },
})