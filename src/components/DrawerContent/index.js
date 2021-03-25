import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from '../StyledComponents';
import {
    DrawerContentScrollView
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';
import Sample from '../../assests/sample.png';
import styles from './styles';
import Colors from '../../constants/color';
import { Switch } from 'react-native';
import { useTheme, useThemeToggler } from '../../contexts/theme';
import { useStore, useDispatcher } from '../../contexts/reducer';
import { ActionTypes, App, Screens } from '../../constants/appConstants';

export default (props) => {
    const toggleTheme = useThemeToggler();
    const { userDetails } = useStore();
    const dispatch = useDispatcher();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <DrawerContentScrollView>
                <View style={styles.profileWrapper}>
                    <Image source={Sample} style={styles.profile} />
                    <Text style={[styles.text, styles.boldLabel]}>{userDetails?.name}</Text>
                    <Text style={[styles.username]}>{userDetails?.email}</Text>
                </View>
                <View style={styles.separatorLine} />
                <TouchableOpacity style={styles.row} onPress={() => props.navigation.navigate(Screens.HOME)}>
                    <Text style={styles.boldLabel}>{Screens.HOME}</Text>
                    <Icon
                        style={styles.icon}
                        name="home"
                        color={Colors.TWITTER_BLUE}
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => props.navigation.navigate(Screens.PROFILE)}>
                    <Text style={styles.boldLabel}>{Screens.PROFILE}</Text>
                    <Icon
                        style={styles.icon}
                        name="account"
                        color={Colors.TWITTER_BLUE}
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.row} onPress={() => props.navigation.navigate(Screens.ABOUT_US)}>
                    <Text style={styles.boldLabel}>{Screens.ABOUT_US}</Text>
                    <Icon
                        style={styles.icon}
                        name="information-variant"
                        color={Colors.TWITTER_BLUE}
                        size={30}
                    />
                </TouchableOpacity>
                <View style={styles.separatorLine} />
                <View style={styles.row}>
                    <Text style={styles.boldLabel}>{App.THEME}</Text>
                    <Switch
                        trackColor={{ false: Colors.SWITCH_FALSE, true: Colors.SWITCH_TRUE }}
                        thumbColor={Colors.SWITCH_THUMB}
                        onValueChange={() => toggleTheme()}
                        value={useTheme()}
                    />
                </View>
            </DrawerContentScrollView>
            <View style={styles.separatorLine} />
            <TouchableOpacity 
                style={styles.row} 
                onPress={() => {
                    dispatch({ type: ActionTypes.LOGGED_OUT })
                    props.navigation.navigate(Screens.SING_UP)
                }}
            >
                <Text style={styles.boldLabel}>{App.LOGOUT}</Text>
                <Icon style={styles.icon} name="exit-to-app" color={Colors.TWITTER_BLUE} size={30} />
            </TouchableOpacity>
        </SafeAreaView>
    );
}