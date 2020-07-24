import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';
import {
    Header,
    Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class ProfileData extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.background}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ alignItems: 'center', }}>
                        <Image
                            source={require('./asserts/ic_profile_image.png')} style={styles.profileImage} />
                    </View>
        
                    <Text style={styles.textName}>
                        Name</Text>
                    <Text style={styles.textAge}>
                        Age</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        backgroundColor: Colors.white,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    buttonTestStyle: {
        fontWeight: "bold",
        textAlign: "center",
        color: 'white',
    },
    textName: {
        fontSize: 22,
        padding: 10,
        fontWeight: "bold",
        textAlign: 'center',
        color: '#000000',
    },
    textAge: {
        fontSize: 18,
        marginTop: 5,
        textAlign: 'center',
        color: '#000000',
    },
    profileImage: {
        height: 200,
        width: 200,
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch',
    },
    background: {
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        flex: 1,
    }
});