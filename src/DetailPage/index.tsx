import * as React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
    Button
} from 'react-native';
import { any } from 'prop-types';
import { setGlobal } from '../common/Global';

const onButtonPress = () => {
    alert('已送达');
  };

export default class DetailPage extends React.Component {

    private onButtonPress(){
        
    }
    _renderItem = (info) => {
        var txt = '  ' + info.item.title;
        const starttime=info.item.starttime||'';
        const address=info.item.address||'';
        const tel=info.item.tel||'';
        const content=info.item.content||'';
        const time=info.item.time||'';


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
                {time} 
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
                {address} 
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
                {starttime} 
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
                {tel} 
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
                {content} 
            </Text>
          </View>
        )
          
    }
    // _sectionComp = (info) => {
    //     var txt = info.section.key;
    //     return <Text
    //       style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>
    // }
    render() {
        
        var sections = [
            {
                key: "A",
                 data: [
                { title: "订单编号：GTX960TI23333",
                  starttime:"2019-04-01 16:00",
                  address:'送至：华东师范大学第五宿舍' ,
                  tel:'12345678900',
                  content:'美式田园风情披萨 x1',
                  time:'配送剩余时间：30:00', },
            ] },
        ];
        console.log('render orders')
        return (

            <View style={styles.container}>
            
             {/* <View style={styles.header}>
                 <Text style={styles.title}>订单详情</Text>
             </View> */}
             
             <View style={styles.body}>
                <View style={styles.list}>
                <SectionList
                     //renderSectionHeader={this._sectionComp}
                     renderItem={this._renderItem}
                     sections={sections}
                     ItemSeparatorComponent={() => <View><Text></Text></View>}
                     //ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
                     //ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录尾部</Text></View>}
                />
                </View>
             </View>



             <View style={styles.foot}>
               {/* <View style={styles.loginBtn} >
                <Button 
                    onPress={() => { this.onPressLearnMore }}
                    title="登录"
                    color='#fff'
                />
                </View> */}
             </View>

             <View style={{margin:16}}>
                <Button
                    title="确认送达"
                    onPress={onButtonPress}
                    color="#841584">
                </Button>    
             </View>
{/* 
             refreshing={this.state.refreshing}
             onRefresh={() => {
                 this.setState({refreshing: true})//开始刷新
                 //这里模拟请求网络，拿到数据，3s后停止刷新
                 setTimeout(() => {
                     alert('没有可刷新的内容！');
                     this.setState({refreshing: false});//停止刷新
                    }, 3000);
                }} */}

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
        backgroundColor:'white'
    },
    header:{
        height:100,
        backgroundColor:'pink'
    },
    body:{
        flexGrow:1,
        //height:100,
        //backgroundColor: 'orange'
    },
    foot:{
        //flexGrow:1,
        //backgroundColor: 'green'
    },

    title:{
        fontSize:20,
        textAlign:'center',
        paddingTop:60,
    },

    list:{
        //flex:1,
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
        //backgroundColor: 'yellow'
    },
    flatList:{
        //fontSize:50,
    },
});

