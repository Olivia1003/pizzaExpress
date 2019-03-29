import * as React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
    Button,
    TouchableOpacity
} from 'react-native';
import { any } from 'prop-types';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// comp
import TopHeader from '../common/component/TopHeader'

export default class OrderPage extends React.Component {
    //隐藏垂直状态条
    showsVerticalScrollIndicator = { false: any }
    //如果设置为横向
    horizontal = { true: any }
    //隐藏水平状态条
    showsHorizontalScrollIndicator = { false: any }

    private navigateToPage(pageName: string) {
        console.log('navigateToPage---', pageName)
        this.props.navigation.navigate(pageName)
    }

    _renderItem = (info) => {
        var txt = '  ' + info.item.title;
        return (
            <Text
                style={{
                    height: 150,
                    lineHeight: 55,
                    textAlignVertical: 'center',
                    backgroundColor: "orange",
                    color: '#000',
                    fontSize: 18
                }}>
                {txt}
            </Text>
        )
    }
    render() {
        var sections = [
            {
                key: "A",
                data: [
                    { title: "第一个订单" },
                    { title: "第二个订单" },
                    { title: "第三个订单" },
                    { title: "第四个订单" },
                    { title: "第五个订单" },
                    { title: "第六个订单" },
                    { title: "第七个订单" },
                    { title: "第八个订单" }
                ]
            },
        ];
        return (
            <View style={styles.container}>
            
               

                <TopHeader title={'骑手订单页面'}/>

                <TouchableOpacity onPress={()=>{
                    this.navigateToPage('Login')
                }}>
                    <Text>登录</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    this.navigateToPage('Detail')
                }}>
                    <Text>订单详情</Text>
                </TouchableOpacity>

                <View style={styles.body}>
                    <View style={styles.list}>
                        <SectionList
                            renderItem={this._renderItem}
                            sections={sections}
                            ItemSeparatorComponent={() => <View><Text></Text></View>}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    },
    foot: {
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 60,
    },
    list: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    flatList: {
    },
});

