import React from 'react';
import Header from '../../components/Header';
import { 
    SafeAreaView,
    Text,
    View
} from '../../components/StyledComponents';
import styles from '../../util/styles';

export default (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header {...props} />
            <View style={styles.absoluteContainer}>
                <Text>
                    This is Profile Screen
                </Text>
            </View>
        </SafeAreaView>
    );
}