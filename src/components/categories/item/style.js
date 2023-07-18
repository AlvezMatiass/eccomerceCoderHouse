import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
    },
    imageBackground:{
        width: '100%',
        height: 146,
        justifyContent: "flex-end",
    },
    imageBackgroundTablet: {
        height: 260,
        justifyContent: 'flex-end'
    },
    categoryName: {
        fontSize: 22,
        fontFamily: 'Inter-Bold',
        color: COLORS.secundary,
        padding: 12,
        textShadowColor: 'rgba(0,0,0, 0.35)',
        textShadowOffset: { width: -0.5, height: 0.5},
        textShadowRadius: 8
    },
    categoryNameTablet: {
        fontSize: 34,
        padding: 24,
        fontFamily: 'Inter-Bold',
        color: COLORS.secundary,
        textShadowColor: 'rgba(0,0,0, 0.35)',
        textShadowOffset: { width: -0.5, height: 0.5},
        textShadowRadius: 8
    },
})