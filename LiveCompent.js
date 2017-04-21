import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Alert,
    Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class LiveCompent extends Component{
    render() {
        return (
            <Navigator
            renderScene={this._renderScene}
            configureScene={this._configreScene}
            initialRoute={{name:'one', component:TestDemo ,title:'one'}}

            >

            </Navigator>
        )
    }

    _renderScene = (route, navigator)=>{
        return <route.component
                navigator={navigator}
                {...route.passProps}/>;
    }

    _configreScene=(route,routeStatck)=>{
        if(route.sceneConfig){

        return route.sceneConfig;
        }

        return Navigator.SceneConfigs.PushFromRight;
    }
}



class TestDemo extends  Component{

    constructor(props){
        super(props);

        this.state = {data: this.props.data? this.props.data:'nimadededd'};
    }


    render = ()=>{
            return(
                <View style={styles.container}>
                    <View style={styles.navStyle}>
                        <Text >{this.props.title}</Text>
                    </View>
                    <Text style={styles.textStyle} onPress={this._onPress}>{ this.state.data }</Text>
                </View>
            )
    }

    _onPress=(e)=>{
        this.props.navigator.push(
            {
            component: TestDemo,
            title: 'title',
            passProps: {data:'title' + Math.ceil(Math.random()*1000) }
        })
    }
}

const  styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: 'white' ,
            justifyContent:'center',
            alignItems:'center',
        },


        textStyle:{
          alignSelf:'center',
            fontSize:18,
            color:'#ff6900',
        },

        navStyle:{
            height:64,
            backgroundColor:'#f0f0f0',
            alignSelf:'flex-start',
            justifyContent:'center',
            alignItems:'center',
            width: screenWidth,
        },

    }
);