import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Header } from './src/components/common';
// import FriendList from './src/components/inbox/FriendList';
import AppContainer from './src/AppContainer';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText="Sabrina" />
        < AppContainer />
    </View>
);

AppRegistry.registerComponent('sabrina', () => App);
