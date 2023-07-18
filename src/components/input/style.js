import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        color: COLORS.text,
        paddingHorizontal: 12,
    },
    inputTablet: {
        borderWidth: 1,
        borderRadius: 8,
        color: COLORS.text,
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 20
    },
})