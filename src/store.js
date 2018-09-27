import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import * as firebase from 'firebase';
import 'firebase/firestore';
import {firebaseConfig} from './config/firebase';

firebase.initializeApp(firebaseConfig);
firebase.auth();
firebase.firestore();

const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;