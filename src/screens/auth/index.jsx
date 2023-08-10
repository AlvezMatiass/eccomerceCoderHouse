import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './style';
import { useEffect, useReducer, useState } from 'react';
import { COLORS } from '../../themes';
import { useSignInMutation, useSignUpMutation } from '../../store/auth/api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/auth/auth.slice';
import { InputForm } from '../../components';
import { UPDATE_FORM, onInputChange } from '../../utils/form';

const initialState = {
    email: { value: '' , error: '', touched: false, hasError: true},
    password: { value: '' , error: '', touched: false, hasError: true},
    isFormValid: false
}

const formReducer = (state, action) => {
    switch ( action.type ) {
        case UPDATE_FORM:
            const { name, value, hasError, error, touched, isFormValid } = action.data
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    error,
                    hasError,
                    touched
                },
                isFormValid
            }
        default:
            return state
    }
}

const Auth = () => {

    const dispatch = useDispatch()

    const [ formState, dispatchFormState ] = useReducer(formReducer, initialState)

    const [isLogin, setIsLogin] = useState(true)

    const headerTitle = isLogin ? 'Login' : 'Register'
    const buttonTitle = isLogin ? 'Login' : 'Register'
    const messageText = isLogin ? 'Need an account?' : 'Already have an account?'

    const [signIn, {data}] = useSignInMutation();

    const [signUp] = useSignUpMutation()

    const onHandlerAuth = async () => {
        try {
            if (isLogin) {
                const result = await signIn({ email: formState.email.value , password: formState.password.value})
                if (result?.data) dispatch(setUser(result.data))
            } else {
                signUp({ email: formState.email.value , password: formState.password.value })
            }
        } catch (error) {
            console.error(error)
        }
    }

    const onHandlerInputChange = ({ name, value }) => {
        onInputChange({name, value, dispatch: dispatchFormState, formState})
    }

    const onHandlerChangeAuth = () => {
        setIsLogin(!isLogin)
    }

    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.header}>{headerTitle}</Text>
                <InputForm
                    placeholder='email@domain.com'
                    placeholderTextColor={COLORS.gray}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={formState.email.value}
                    onChangeText={(text) => {onHandlerInputChange({ value: text, name: 'email' })}}
                    label="Email"
                    error={formState.email.error}
                    touched={formState.email.touched}
                    hasError={formState.email.hasError}
                />
                <InputForm
                    placeholder='**********'
                    placeholderTextColor={COLORS.gray}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry
                    value={formState.password.value}
                    onChangeText={(text) => {onHandlerInputChange({ value: text, name: 'password' })}}
                    label="Password"
                    error={formState.password.error}
                    touched={formState.password.touched}
                    hasError={formState.password.hasError}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onHandlerAuth}>
                    <Text style={styles.buttonText}>{buttonTitle}</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity style={styles.link} onPress={onHandlerChangeAuth}>
                    <Text style={styles.linkText}>{messageText}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Auth;