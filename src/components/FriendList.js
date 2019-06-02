import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class FriendList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
    }

    renderFriends() {
        return this.state.albums.map(album => <Text>{album.title}</Text>);
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderFriends()}
            </View>
        );
    }
}

export default FriendList;