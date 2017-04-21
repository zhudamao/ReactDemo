import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';

import {
    NativeModules,
    NativeAppEventEmitter
} from  'react-native';

const TestManager = NativeModules.TestManager;


export default  class MainCompent extends Component {
    constructor(props) {
        super(props);

        const rowData = this.props.rowData|| {link: 'tesdfsdfsdfsdf'};

        this.state = {
            rowData: rowData,
        };
    }

    componentDidMount(){
        subscription = NativeAppEventEmitter.addListener(
            'EventReminder',
            (reminder) => {

                this.setState({rowData:reminder[0]});
            }
        );
    }

    componentWillUnmount(){
        subscription.remove();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    numberOfLines={0}
                    onPress={this._pressAction}
                >{this.state.rowData.link }</Text>
            </View>
        )
    }
// js call Reactive
    _pressAction = ()=>{
        TestManager.doAnyThing({'one':1,'two':2,'three':3},(error,events)=>{
            Alert.alert(
                'Alert Title',
                 events.join('+'),
                [
                    {text: 'OK', onPress: () => { this.testPromise()}},
                ]
            )
        })
    }

    async testPromise(){
        console.log(TestManager.receiveNotificationName);

        try {
            var events = await TestManager.testPromiseEvent();
            Alert.alert(
                'events',
                events.join('+'),
                [

                    {text:'CallNative', onPress:()=>{
                        TestManager.jsCallOring(['nimie','ni daye'])

                    }},
                ]
            )
        }catch (e){

        }

    }



}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#dddddd',
            justifyContent: 'center',
        },

    }
);