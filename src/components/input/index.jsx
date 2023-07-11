import { TextInput, View } from "react-native";

import { styles } from "./style";
import { COLORS } from "../../themes";

const Input = ({
    borderColor,
    onHandleFocus,
    onHandleBlur,
    onHandleChangeText,
    text,
    ...props
    }) => {
    return (
        <View style={styles.container}>
            <TextInput
            {...props}
            style={styles.input}
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