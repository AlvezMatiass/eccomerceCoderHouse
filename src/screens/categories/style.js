import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    categoryContainer: {
      marginHorizontal: 12,
      marginTop: 12,
    },
    listCategory: {
      gap: 12,
      paddingBottom: 12,
    },
  });
  