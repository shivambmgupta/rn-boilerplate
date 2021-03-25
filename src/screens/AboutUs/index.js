import React from 'react';
import { 
    SafeAreaView,
    Text,
    View
} from '../../components/StyledComponents';
import Header from '../../components/Header';
import styles from '../../util/styles';
 
export default (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header {...props} />
            <View style={styles.absoluteContainer}>
                <Text>
                    This is About screen
                </Text>
            </View>
        </SafeAreaView>
    );
}