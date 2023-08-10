import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: '70%',
        height: 240
    },
    header: {
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        fontSize: 20,
        marginBottom: 14
    },
    buttonContainer: {
           marginTop: 4
    },
    button: {
        backgroundColor: COLORS.text,
        paddingVertical: 6,
        paddingHorizontal: 24
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'Inter-Medium',
        color: COLORS.primary
    },
    linkContainer: {
        marginTop: 12
    },
    link: {

    },
    linkText: {
        fontSize: 12,
        fontFamily: 'Inter-Bold',
        opacity: .4
    },
})