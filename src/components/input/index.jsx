import { TextInput, View, useWindowDimensions } from "react-native";
import { styles } from "./style";

const Input = ({
    borderColor,
    onHandleFocus,
    onHandleBlur,
    onHandleChangeText,
    text,
    ...props
    }) => {

    const { width } = useWindowDimensions()

    const tabletMode = width > 640
    
    return (
        <View style={styles.container}>
            <TextInput
            {...props}
            style={tabletMode ? styles.inputTablet : styles.input}
            onFocus={onHandleFocus}
            onBlur={onHandleBlur}
            onChangeText={onHandleChangeText}
            autoCorrect={false}
            autoCapitalize="none"
            />
        </View>
    )
}

export default Input;