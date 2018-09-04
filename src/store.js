import {createStore, applyMiddleware} from 'redux';
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
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;