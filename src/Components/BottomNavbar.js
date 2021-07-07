import React, { Component } from 'react';
import { View } from 'react-native';
import {BottomNavigation} from "react-native-paper";
import MostViral from '../View/MostViral';
import Search from '../View/Search';
import Upload from '../View/Upload';
import Profile from '../View/Profile';

export default class BottomNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                {key: 'mostViral', title: 'Most Viral', icon:'home', color: '#549900'},
                {key: 'search', title: 'Search', icon: 'image-search', color: "#549900"},
                {key: 'upload', title: 'Upload', icon: 'camera', color: "#549900"},
                {key: 'profile', title: 'Profile', icon: 'account-circle', color: "#549900"},
            ],
        };
    }

    handleIndexChanges = index => this.setState({index});

    renderScene = BottomNavigation.SceneMap({
        mostViral: MostViral,
        search: Search,
        upload: Upload,
        profile: Profile
    })

    render() {
        return (
            <View style={{flex: 1}}>
                <BottomNavigation
                    shifting={true}
                    navigationState={this.state}
                    onIndexChange={this.handleIndexChanges}
                    renderScene={this.renderScene}
                />
            </View>
        );
    }
}
