/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    Alert,
    PixelRatio,
} from 'react-native';

import MainCompent from './MainCompent';
import LiveCompent from  './LiveCompent'
import DiscoveryCompent from  './DiscoveryCompent'
import MineCompent from './MineCompent'

const scale = PixelRatio.get();

export default class demo01 extends Component {
    state = {
        selectedTab: 1,

    }


    render() {
        console.log(this.props.list)
        return (
            <TabBarIOS
                tintColor='#ff6900'
            >
                <TabBarIOS.Item
                    icon={{url: 'item0-0.png', scale: scale}}
                    selectedIcon={{url: 'item0.png', scale: scale}}
                    renderAsOriginal
                    title='品值'
                    selected={this.state.selectedTab === 1}
                    onPress={()=> {
                        this.setState({'selectedTab': 1})

                    }}
                >
                    {this._renderContent(1)}

                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{url: 'item1-0', scale: scale}}
                    selectedIcon={{url: 'item1', scale: scale}}
                    renderAsOriginal
                    title='生活'
                    selected={this.state.selectedTab === 2}
                    onPress={()=> {
                        this.setState({'selectedTab': 2})
                    }}
                >
                    {this._renderContent(2)}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{url: 'item2-0', scale: scale}}
                    selectedIcon={{url: 'item2', scale: scale}}
                    renderAsOriginal
                    title='发现'
                    selected={this.state.selectedTab === 3}
                    onPress={()=> {
                        this.setState({'selectedTab': 3})
                    }}
                >
                    {this._renderContent(3)}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={{url: 'item3-0', scale: scale}}
                    selectedIcon={{url: 'item3', scale: scale}}
                    renderAsOriginal
                    title='我'
                    selected={this.state.selectedTab === 4}
                    onPress={()=> {
                        this.setState({'selectedTab': 4})
                    }}
                >
                    {this._renderContent(4)}
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }

    onPressAction() {
        Alert.alert("funk", "you")

    }

    _renderContent(num) {
        let retCompent = null;
        switch (num) {
            case 1:
                retCompent = <MainCompent/>
                break;
            case 2:
                retCompent = <LiveCompent/>
                break;
            case 3:
                retCompent = <DiscoveryCompent/>
                break;
            case 4:
                retCompent = <MineCompent/>
                break;
        }
        return  retCompent;
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
        backgroundColor: '#ff6900'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

});

AppRegistry.registerComponent('demo01', () => demo01);
