import * as React from 'react';
import { View, StyleSheet, Dimensions, Text} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import UserComments from './UserComments'
import UserFavorites from "./UserFavorites";
import UserPosts from "./UserPosts";


const PostsRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'black' }]}>
        <UserPosts/>
    </View>);

const FavoritesRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'black' }]}>
          <UserFavorites/>
    </View>
);

const FollowingRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'black' }]} />
);

const CommentsRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'black' }]}>
        <UserComments/>
    </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'posts', title: 'Posts' },
        { key: 'favorites', title: 'Favorites' },
        { key: 'following', title: 'Following' },
        { key: 'comments', title: 'Comments' },
    ]);

    const renderScene = SceneMap({
        posts: PostsRoute,
        favorites: FavoritesRoute,
        following: FollowingRoute,
        comments: CommentsRoute,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={{ backgroundColor: '#549900', color: 'black'}}
            renderLabel={({ route, focused, color }) => (
                <Text style={{ color : 'white' }}>
                    {route.title}
                </Text>
            )}
        />
    );

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
        />
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    tabTextColor: {
        color: '#ccc'
    }
});
