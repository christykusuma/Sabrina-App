import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import FriendList from './src/components/FriendList';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Sabrina'} />
        < FriendList />
    </View>
);

AppRegistry.registerComponent('sabrina', () => App);