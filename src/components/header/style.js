import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from '../../themes'

export const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.background,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontFamily: 'Inter-Medium',
        color: COLORS.secundary,
    },
    containerTablet: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORS.background,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleTablet: {
        fontSize: 38,
        fontFamily: 'Inter-Bold',
        color: COLORS.secundary,
    },
})