import * as React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
    Button,
    TouchableOpacity,
    ScrollView
} from 'react-native';

// var Cell = require('./src/MyCell');

// import { StackNavigator, TabBarBottom, TabNavigator } from "react-navigation";

// comp
import MyCell from './components/MyCell'
import TopHeader from '../common/component/TopHeader'

export default class mypage extends React.Component {
    // static defaultProps = {
    //     LeftTitle: '',     // 左侧标题
    //     LeftImage: '',     // 左侧图片
    //     RightTitle: '',    // 右侧标题
    //     RightImage: '',    // 右侧图片
    // }

    // _renderItem = (info) => {
    //     var txt = '  ' + info.item.title;
    //     return <Text
    //         style={{
    //             height: 150,
    //             lineHeight: 55,
    //             textAlignVertical: 'center',
    //             backgroundColor: "orange",
    //             color: '#000',
    //             fontSize: 18
    //         }}>
    //         {txt}
    //     </Text>
    // }
    // _sectionComp = (info) => {
    //     var txt = info.section.key;
    //     return <Text
    //       style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>
    // }
    _renderItem = (info) => {
        var txt = '  ' + info.item.title;
        const orders=info.item.orders||'';
        const cost=info.item.cost||'';
        const results=info.item.results||'';
        const scheduling=info.item.scheduling||'';
    
    return (
        <View>
    <Text
      style={{ 
        height:50,
        lineHeight:55,
        textAlignVertical: 'center', 
        backgroundColor: "orange", 
        color: '#000', 
        fontSize: 18 }}>
      {txt}
      </Text>
      <Text
            style={{
                height: 50,
                lineHeight: 55,
                textAlignVertical: 'center',
                backgroundColor: "orange",
                color: '#000',
                fontSize: 18
            }}>
            {orders} 
        </Text>
        <Text
            style={{
                height: 50,
                lineHeight: 55,
                textAlignVertical: 'center',
                backgroundColor: "orange",
                color: '#000',
                fontSize: 18
            }}>
            {cost} 
        </Text>
        <Text
            style={{
                height: 50,
                lineHeight: 55,
                textAlignVertical: 'center',
                backgroundColor: "orange",
                color: '#000',
                fontSize: 18
            }}>
            {results} 
        </Text>
        <Text
            style={{
                height: 50,
                lineHeight: 55,
                textAlignVertical: 'center',
                backgroundColor: "orange",
                color: '#000',
                fontSize: 18
            }}>
            {scheduling} 
        </Text>
        
      </View>
    )
        }

    render() {
        var sections = [
            {
                key: "A",
                 data: [
                { title: "接单指南",
                  orders:"历史订单",
                  cost:'账户中心' ,
                  results:'骑手业绩',
                  scheduling:'我的排班',}
            ] },
        ];

        return (
            <View style={styles.container}>
                 <TopHeader title={'我的'}/>

                {/* {this.renderNavBar()} */}
                <ScrollView>
                    <View style={{ marginTop: 10 }}>
                        <MyCell
                            LeftImage="collect"
                            LeftTitle="我的订单"
                            RightTitle="查看全部订单"
                        />
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <MyCell
                            LeftImage="draft"
                            LeftTitle="钱包"
                            RightTitle="账户余额:￥100.88"
                        />
                        <MyCell
                            LeftImage="like"
                            LeftTitle="抵用券"
                            RightTitle="10张"
                        />

                    </View>

                    <View style={{ marginTop: 10 }}>
                        <MyCell
                            LeftImage="new_friend"
                            LeftTitle="今日推荐"
                            RightImage="me_new"
                        />
                    </View>
                    
                </ScrollView> 

                {/* <View style={styles.header}>
                    <Text style={styles.title}>我的</Text>
                </View> */}

                {/* <View style={styles.foot}>

                </View> */}

            </View>
        )
    }

    renderNavBar() {
        return (
            <View style={styles.NavBatstyle}>
                <Text style={styles.TitleStyle}>我的</Text>
                <TouchableOpacity style={styles.settingPositionStyle} onPress={() => { alert('设置按钮被点击') }}>
                </TouchableOpacity>
            </View>

        )
    }
}




const styles = StyleSheet.create({
    // tabTxt: {
    //     color: '#f00',
    //     fontSize: 30
    // },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        height: 100,
        backgroundColor: 'pink'
    },
    body: {
        flexGrow: 1,
        //height:100,
        //backgroundColor: 'orange'
    },
    foot: {
        //flexGrow:1,
        //backgroundColor: 'green'
    },

    title: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 60,
    },

    list: {
        //flex:1,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: 'yellow'
    },
    flatList: {
        //fontSize:50,
    },

    NavBatstyle: {
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255,96,0,1)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },

    TitleStyle: {
        color: 'white',
        fontSize: 20,
    },

    settingPositionStyle: {

        position: 'absolute',
        right: 10,
        bottom: 15,
    },

    ImagesIconStyle: {

        width: Platform.OS === 'ios' ? 28 : 24,
        height: Platform.OS === 'ios' ? 28 : 24,
    },
});



