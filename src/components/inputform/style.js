import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        fontFamily: 'Inter-Regular',
        height: 30,
        width: '90%',
        borderBottomColor: COLORS.text,
        borderBottomWidth: .5,
    },
    errorContainer: {
        flex: 1,
    },
    error: {
        fontSize: 12,
        fontFamily: 'Inter-Bold',
        paddingVertical: 12,
        color: COLORS.text
    }
})