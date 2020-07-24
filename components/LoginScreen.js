import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import {
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native';
import {
    Header,
    Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ alignItems: 'center', }}>
                        <Image
                            source={require('./asserts/ic_login_heading.png')} style={styles.imageStyle} />
                    </View>
                    <TextInput style={styles.textView}
                        placeholder="Email Id"
                        placeholderTextColor="grey" />
                    <TextInput style={styles.textView}
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor="grey" />

                    <TouchableOpacity style={styles.appButtonContainer} onPress={() =>
                        this.props.navigation.reset({
                            index: 0,
                            routes: [{ name: 'TabNavigationScreen' }],
                        })}>
                        <Text style={styles.buttonTestStyle}>Log In</Text>
                    </TouchableOpacity>

                    <Text style={styles.textAccount}>
                        Don't have a Account</Text>
                    <Text style={styles.textSignUp}>
                        Sign Up</Text>
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
    textView: {
        height: 50,
        marginHorizontal: 20,
        marginTop: 10,
        color: "white",
        borderColor: 'gray',
        borderBottomWidth: 1
    },
    buttonTestStyle: {
        fontWeight: "bold",
        textAlign: "center",
        color: 'white',
    },
    textAccount: {
        fontSize: 14,
        padding: 10,
        textAlign: 'center',
        color: '#CD5991',
    },
    textSignUp: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: "bold",
        textAlign: 'center',
        color: '#CD5991',
    },
    imageStyle: {
        height: 60,
        width: 250,
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch',
    },
    background: {
        justifyContent: 'center',
        backgroundColor: '#000000',
        flex: 1,
    },
    appButtonContainer: {
        elevation: 8,
        marginTop: 50,
        marginStart: 20,
        marginEnd: 20,
        backgroundColor: '#CD5991',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
});