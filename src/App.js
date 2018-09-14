import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import AppNavigator from './navigation/navigators';
import {MenuProvider} from 'react-native-popup-menu';

type Props = {};
export default class App extends Component<Props> {

    render() {
        return (
            <Provider store={store}>
                <MenuProvider style={{flexDirection: 'column'}}>
                    <AppNavigator/>
                </MenuProvider>
            </Provider>
        );
    }
}
