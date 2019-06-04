import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import firebase from 'firebase';
import { firebaseConfig } from '../config';
import { Button, Spinner } from './components/common';
import LoginForm from './components/user/LoginForm';

class AppContainer extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp(firebaseConfig);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent = () => {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <ScrollView>
                {this.renderContent()}
            </ScrollView>
        );
    }
}

export default AppContainer;
