import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import FriendDetail from './FriendDetail';

class FriendList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
    }

    renderFriends() {
        return this.state.albums.map(album => 
            <FriendDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
            <View>
                {this.renderFriends()}
            </View>
        );
    }
}

export default FriendList;