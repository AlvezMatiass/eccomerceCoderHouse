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
        fontWeight: "bold",
        color: COLORS.secundary,
    }
})