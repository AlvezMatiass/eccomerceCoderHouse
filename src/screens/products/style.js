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
    goBackTextTablet: {
        fontSize: 21,
        fontFamily: 'Inter-Bold',
        marginHorizontal: 6
    },
    productContent: {
        flex: 1,
        marginHorizontal: 12,
    },
    notFound: {
        flex: 1,
        alignItems: 'center',
    },
    notFoundText: {
        fontSize: 16
    },
    notFoundTablet: {
        fontSize: 28,
    },
    closeInput: {
        position: "absolute",
        zIndex: 2,
        right: 5,
        top: 2.5,
    },
})