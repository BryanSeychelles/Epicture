import React, {Component} from 'react';
import env from '../env.json'
import { StyleSheet, View, Image } from 'react-native';
import {Button, Text} from 'react-native-paper';
import { connect } from "react-redux";
import * as AuthSession from "expo-auth-session";

class Login extends Component {

    async componentDidMount() {
    }

    _sendRequestLogin = async () => {
        const redirect_uri = AuthSession.makeRedirectUri();
        console.log(redirect_uri)
        const result = await AuthSession.startAsync({
            authUrl: `https://api.imgur.com/oauth2/authorize?client_id=${env.clientId}&response_type=token`,
            returnUrl: redirect_uri,
        });
        console.log("Result: " + JSON.stringify(result))
        if (result.type === "success") {
            const action = { type: "LOGIN_TYPE", data: result }
            this.props.dispatch(action);
            this.props.callback(true);
            console.log("SUCCESS")
        } else {
            this.props.callback(false);
        }
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={ styles.container }>
                    <View style={ styles.center }>
                        <Image style={ styles.image } source={require('../assets/imgurLogo.png')} />
                    </View>
                    <View style={ styles.center }>

                    </View>
                    <View style={ styles.center }>
                        <Button
                            mode="contained"
                            icon="account-circle"
                            onPress={() => this._sendRequestLogin()}
                            style={styles.loginButton}>
                            <Text style={{ color: "#C4DBF6"}}>Login</Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect()(Login);

const styles = StyleSheet.create({
    center: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#549900",
    },

    logo: {
        flex: 1,
        width: 900,
        height: 900,
        resizeMode: 'contain',
    },

    loginButton: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ed7462',
        borderRadius: 15
    },

    image: {
        width: 188.5,
        height: 68,
        top: 150,
    },

    heading: {
        width: 'auto',
        height: 'auto',
    }
});
