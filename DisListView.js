import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image,
    RefreshControl,
} from 'react-native';

const IMGURL = 'https://fuss10.elemecdn.com/';

export  default  class DisListView extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 != r2});
        this.state = {dataSource: ds,isRefreshing:false};
    }

    componentWillMount() {
        fetch('https://mainsite-restapi.ele.me/v2/index_entry?geohash=wtw3x17junqw&group_type=1').then((respone)=>respone.json()).then((responArry)=> {
            this.setState({dataSource: this.state.dataSource.cloneWithRows(responArry),isRefreshing:false});
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._rendRow.bind(this)}
                style={styles.listContainer}
                renderHeader={this._renderHeader}
                refreshControl = {
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor='#cccccc'
                        title= 'salarying....'
                        titleColor='#000000'
                        progressBackgroundColor='#ffff00'
                    >
                    </RefreshControl>
                }
            >
            </ListView>
        )
    }

    _renderHeader = ()=>{
        return(
            <View style={styles.headerStyle}>
                <TouchableOpacity onPress= {this._scanAction.bind(this)}>
                    <View style={styles.headerItemStyle}>
                        <Image source={require('./scan.png')} style={{margin:10}}></Image>
                        <Text style={{fontSize:16,fontWeight:'600'}}>{'扫一扫'}</Text>
                    </View>

                </TouchableOpacity>

                <View  style={styles.lineStyle}/>

                <TouchableOpacity onPress= {this._scanCode.bind(this)}>
                    <View style={styles.headerItemStyle} >
                        <Image source={require('./fkm.png')} style={{margin:10}}></Image>
                        <Text style={{fontSize:16,fontWeight:'600'}}>{'我的码'}</Text>
                    </View>

                </TouchableOpacity>

            </View>
        )

    }

    _scanAction(){

    }

    _scanCode(){


    }

    _onRefresh(){
        this.setState({isRefreshing:true})
        this.componentWillMount();
    }

    _rendRow(rowData, sectionID, rowID, highlightRow) {
        let imageurl = IMGURL + rowData.image_url;

        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>this._jumpToNewsDetail(rowData)}>
                <View style={styles.itemViewContainer}>

                    <Image source={{uri: imageurl}}
                           style={styles.itemImgStyle}
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.titleStyle}> {rowData.title} </Text>
                        <Text style={styles.descriptionStyle} numberOfLines={2}> {rowData.link}</Text>
                        <Text style={styles.descriptionStyle}>{rowData.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>)
    }

    _jumpToNewsDetail(rowData) {
        this.props.onPressAction(rowData);
    }
}


const styles = StyleSheet.create(
    {
        listContainer: {
            flex: 1,
            backgroundColor: '#ffffff',
        },

        rowStyle: {
            backgroundColor: '#ff6900',
            flexDirection: 'row',
        },
        itemViewContainer: {
            flexDirection: 'row',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: '#e8e8e8',
        },
        itemImgStyle: {
            width: 70,
            height: 70,
            marginLeft: 10,
            alignSelf: 'center'
        },
        rightContainer:{
            justifyContent:'space-around',
            alignItems:'flex-start',
            flex:1,
            marginLeft:10,
        },
        titleStyle: {
            fontSize: 16,
            color: '#333333',
            fontWeight: "700",
        },
        descriptionStyle: {

            fontSize: 12,
            color: '#ff6900',
            fontWeight: "normal",
        },
        lineStyle: {
            width: StyleSheet.hairlineWidth,
            alignSelf: 'center',
            height:60,
            marginVertical:8,
            backgroundColor: '#e8e8e8',
        },
        headerStyle:{
            height:80,
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            borderBottomColor:'#cccccc',
            borderBottomWidth:StyleSheet.hairlineWidth,
        },

        headerItemStyle:{
          flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center'
        },


    }
);