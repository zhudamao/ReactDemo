import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
} from 'react-native';

import DisListView from './DisListView';
import WebViewCompent from  './WebViewCompent';

class Route extends Component{
    render(){
        return(
            <View style= {styles.container}>
                <DisListView
                    style = {styles.containerRoute}
                    onPressAction = {(rowData)=>{
                            const nextRoute = {
                                component:WebViewCompent,
                                title:'WebViewCompent',
                                passProps:{rowData:rowData}
                            };

                                this.props.navigator.push(nextRoute)
                            }}
                >
                </DisListView>
            </View>
        )
    }
}

let routeMapper = {
    LeftButton: (route, navigator, index, navState)=> {

        return null;
    },

    Title:(route,navigator,index,navState)=>{
       return  <Text style={styles.detailTitleStyle}>{route.title}</Text>
    },

    RightButton:(route,navigator,index,navState)=>{

        return null;
    },

}


export default class DiscoveryCompent extends Component {
    render() {
        return (
            <NavigatorIOS
            initialRoute={{name:'',component:Route,title:'发现'}}
            style={{flex:1}}

            >
            </NavigatorIOS>
        )
    }

    _configureScene(route,roteStatck){
        if (route.sceneConfig){
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.PushFromRight;
    }

    _renderScene(route,navigator){
        return <route.component
            navigator={navigator}
            {...route.passProps}
        />
    }

}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:'#9d9d9d',
        },
        containerRoute:{
            flex:1,
            backgroundColor:'#ffffff',
            justifyContent:'center',
            alignItems:'center',
        },
        detailTitleStyle:{

            color: 'black',
            marginTop: 15,
            fontSize:20
        },
        navStyle:{
            borderBottomColor:'#cccccc',
            borderBottomWidth:1,
        }

    }
);