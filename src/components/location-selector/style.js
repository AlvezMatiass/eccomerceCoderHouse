import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    preview: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        backgroundColor: COLORS.secundary
    },
    locationMessage: {
        fontFamily: 'Inter-Regular'
    },
})