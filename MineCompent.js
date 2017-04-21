import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';


export default class MineCompent extends Component{
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}


const  styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#fcfcfc'
        },
    }
);