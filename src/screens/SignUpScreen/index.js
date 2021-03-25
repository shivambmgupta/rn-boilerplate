import React from 'react';
import { Alert } from 'react-native';
import {
    Text,
    SafeAreaView,
    TouchableOpacity
} from '../../components/StyledComponents';
import {
    GoogleSignin,
    statusCodes
} from '@react-native-community/google-signin'
import { App, WEB_CLIENT_ID } from '../../constants/appConstants';
import { useEffect } from 'react';
import globalStyles from '../../util/styles';
import styles from './style';
import { Screens, Messages, ActionTypes } from '../../constants/appConstants';
import { useStore, useDispatcher } from '../../contexts/reducer';
import { useTheme } from '../../contexts/theme';
import color from '../../constants/color';

const configureStore = () => {
    GoogleSignin.configure({
        webClientId: WEB_CLIENT_ID,
        offlineAccess: false
    })
}

export default (props) => {
    const { userDetails } = useStore();
    const dispatch = useDispatcher();
    const isDark = useTheme();
    
    useEffect(() => {
        if (userDetails) props.navigation.navigate(Screens.APP)
    }, [userDetails])

    useEffect(() => {
        configureStore();
    }, []);

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            dispatch({ type: ActionTypes.LOGGED_IN, payload: userInfo })
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // when user cancels sign in process,
                Alert.alert('Process Cancelled');
            } 
            else if (error.code === statusCodes.IN_PROGRESS) {
                Alert.alert(Messages.IN_PROGRESS);
            } else {
                Alert.alert(Messages.SOMETHING_WENT_WRONG, error.toString())
            }
        }
    }

    return (
        <SafeAreaView style={globalStyles.absoluteContainer}>
            <TouchableOpacity
                onPress={() => signIn()}
                style={[styles.googleButton, isDark ? { backgroundColor: color.LIGHT_BG } : { backgroundColor: color.DARK_BG }]}>
                <Text style={[styles.googleText, isDark ? { color: color.LIGHT_FG } : { color: color.DARK_FG }]}>
                    {App.GOOGLE}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}