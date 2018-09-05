/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Platform, StyleSheet, Text, View} from 'react-native';
import store from './store';
import {Button, Header, TextField} from "./components/index";
import LoginScreen from "./screens/LoginScreen";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    {/*<Header title='Test'/>*/}
                    {/*<View style={styles.container}>*/}
                        {/*<Text style={styles.welcome}>Welcome to React Native!</Text>*/}
                        {/*<Text style={styles.instructions}>To get started, edit App.js</Text>*/}
                        {/*<Text style={styles.instructions}>{instructions}</Text>*/}
                        {/*<TextField label='Test' placeholder='test'/>*/}
                        {/*<TextField label='Test2' placeholder='test'/>*/}

                        {/*<Button onPress={() => {*/}
                            {/*return 1;*/}
                        {/*}} color='#D6D7D7' text='test'/>*/}
                    {/*</View>*/}
                    <LoginScreen/>
                </View>

            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
