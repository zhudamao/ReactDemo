
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    WebView,
    AlertIOS,
} from 'react-native';


const WEBURL = "https://h5.ele.me/shop/#geohash=wtw3x17junqw";

export  default  class WebViewCompent extends Component{
    constructor(props){
        super(props);

        this.state = {
          rowData: this.props.rowData,
        };

    }

    render(){

        console.log(WEBURL+ '&id='+ this.state.rowData.id);

        return(
            <View style={styles.container}>
                <WebView
                    ref = {'webView'}
                    automaticallyAdjustContentInsets={true}
                    source={{ url :WEBURL+ '&id='+ this.state.rowData.id}}
                    javaScriptEnabled={true}
                    scalesPageToFit={true}
                    style={styles.container}
                    onError={ this._onError}

                >
                </WebView>
            </View>
        );
    }

    _onError(error){
        AlertIOS.prompt('load error', null, null)
    }

}


const  styles = StyleSheet.create(
    {
        container:{
            flex:1,
        },

    }


);



