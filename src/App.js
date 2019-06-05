import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { firebaseConfig } from '../config';
import { Button, Spinner, Header } from './common';
import LoginForm from './user/components/LoginForm';
import LibraryList from './library/components/LibraryList';

// import FriendList from './inbox/components/FriendList';
import reducers from './reducers';

class App extends Component {
    // state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp(firebaseConfig);

        // firebase.auth().onAuthStateChanged((user) => {
        //     if (user) {
        //         this.setState({ loggedIn: true });
        //     } else {
        //         this.setState({ loggedIn: false });
        //     }
        // });
    }

    renderContent = () => {
        // switch (this.state.loggedIn) {
        //     case true:
        //         return (
        //             <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        //         );
        //     case false:
        //         return <LoginForm />;
        //     default:
        //         return <Spinner size="large" />;
        // }
        return <LoginForm />;
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Header headerText="Sabrina" />
                    <ScrollView>
                        <LoginForm />
                        {/* {this.renderContent()} */}
                        {/* <LibraryList /> */}
                    </ScrollView>
                </View>
            </Provider>
        );
    }
}

export default App;
