import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { 
    CHANGE_EMAIL, 
    CHANGE_PASSWORD, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

export const selectLibrary = (id) => {
    return {
        type: 'SELECT_LIBRARY',
        payload: id
    };
};

export const emailChanged = (text) => {
    return {
        type: CHANGE_EMAIL,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: CHANGE_PASSWORD,
        payload: text
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
        });
    };
};