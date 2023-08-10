import { View, Text, TextInput } from 'react-native'
import { styles } from './style';
import Label from '../label';

const InputForm = ({
    editable,
    children,
    value,
    style,
    onChangeText,
    maxLength,
    placeholder,
    keyboardType,
    hasError,
    error,
    touched,
    ...props
}) => {
    return (
        <View style={styles.container}>
            <Label {...props} />
                <TextInput 
                {...props}
                editable={editable}
                value={value}
                style={[styles.input, style]}
                onChangeText={onChangeText}
                maxLength={maxLength}
                placeholder={placeholder}
                keyboardType={keyboardType}
                />
            {
                hasError && touched ? (
                    <View style={styles.errorContainer}>
                        <Text style={styles.error}>{error}</Text>
                    </View>
                ) : null
            }
        </View>
    )
}

export default InputForm;