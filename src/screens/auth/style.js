import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: '70%'
    },
    header: {
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        fontSize: 20,
    },
    label: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        marginTop: 12
    },
    input: {
        fontFamily: 'Inter-Regular',
        height: 40,
        width: '90%',
        borderBottomColor: COLORS.text,
        borderBottomWidth: .5
    },
    buttonContainer: {
           marginTop: 18
    },
    button: {
        backgroundColor: COLORS.text,
        paddingVertical: 4,
        paddingHorizontal: 12
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