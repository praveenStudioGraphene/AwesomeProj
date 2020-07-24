import React, { Component } from "react";
import ProfileData from "./ProfileData";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, FlatList, Text, View, Alert, TextInput, Image, TouchableWithoutFeedback } from 'react-native';

export default class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [
                { id: '1', value: 'Ramesh', age: '23' },
                { id: '2', value: 'Suresh', age: '21' },
                { id: '3', value: 'Dinesh', age: '3' },
                { id: '4', value: 'Poli', age: '42' },
                { id: '5', value: 'Molly', age: '55' },
                { id: '6', value: 'Bolly', age: '12' },
                { id: '7', value: 'Girl', age: '60' },
                { id: '8', value: 'Marvin', age: '14' },
                { id: '9', value: 'Java', age: '24' },
                { id: '10', value: 'Android', age: '27' },
                { id: '11', value: 'Kotlin', age: '10' },
                { id: '12', value: 'Lara Vala', age: '34' }],
        };
    }

    dataSource = [];


    // const [text, setText] = useState('');

    FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }} />
        );
    };

      onSearchInputChange = (text) => {
        // const filterByValue = this.state.FlatListItems.filter(function(item) {
        //     const itemData = item.value ? item.value.toUpperCase() : ''.toUpperCase();
        //     const textData = text.toUpperCase();
        //     return itemData.indexOf(textData) > -1;
        //   });
        // this.setState({
        //     dataSource: filterByValue,
        //     text: text,
        // });
      }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column',backgroundColor:'#FFFFFF' }}>
                <TextInput
                    style={styles.searchStyle}
                    autoCapitalize = "none"
                    placeholder="Search !"
                    // onChangeText={query => {text => this.SearchFilterFunction(text)}}
                    // value={this.state.FlatListItems}
                />
                <FlatList
                    data={this.state.FlatListItems}
                    //data defined in constructor
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    //Item Separator View
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback onPress={this.OnBUttonPress(item)}>
                            <View style={styles.background} >
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ alignItems: 'flex-start', }}>
                                        <Image
                                            source={require('./asserts/ic_profile_image.png')} style={styles.imageStyle} />
                                    </View>
                                    <View style={{ flex: 0, flexDirection: 'column', justifyContent: 'center' }}>
                                        <Text style={styles.textName}>
                                            {item.value}</Text>
                                        <Text style={styles.textSignUp}>
                                            {item.age}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }


    OnBUttonPress(item) {
        // this.props.navigator.push({
        //     id: 'ProfileData'
        //   })
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        backgroundColor:'#FFFFFF',
        flex: 1,
        marginBottom: 10,
        marginTop: 10,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    background: {
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    imageStyle: {
        height: 50,
        width: 50,
        marginTop: 5,
        marginBottom: 5,
        marginStart: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        resizeMode: 'stretch',
    },
    textName: {
        fontSize: 14,
        marginStart: 10,
        fontWeight: "bold",
        textAlign: 'center',
        color: '#000000',
    },
    textSignUp: {
        fontSize: 12,
        marginStart: 10,
        fontWeight: "bold",
        color: '#000000',
    },
    searchStyle: {
        justifyContent: 'center',
        color:'#000000',
        height:40,
        margin:10,
        paddingEnd:10,
        paddingStart:10,
        borderColor: 'gray',
        borderRadius:20,
        borderEndColor:'gray',
        borderWidth: 1
    }
});
