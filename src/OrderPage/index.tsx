import * as React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SectionList,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import { Button, Icon } from "react-native-elements"
import { NavigationEvents } from 'react-navigation';

// components
import TopHeader from '../common/component/TopHeader'
import { showToast } from '../common/utils/Toast'

// server
import { serverIns } from '../common/utils/serverRequest'

// Global
import { getGlobal, setGlobal } from '../common/Global'

const MOCK = false

interface IState {
    orderList: any[]
}

interface IProps {
    navigation: any
}

export default class OrderPage extends React.Component<IProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
            orderList: []
        }
        this.initPage = this.initPage.bind(this)
    }

    private initPage() {
        this.fetchOrderList()
    }

    private navigateToPage(pageName: string) {
        console.log('navigateToPage---', pageName)
        this.props.navigation.navigate(pageName)
    }

    private checkLogin() {
        const deliverId = getGlobal('deliverId')
        if (!deliverId && !MOCK) {
            showToast('请先登录')
            setTimeout(() => {
                this.navigateToPage('Login')
            }, 1000)
        } else {
            showToast('已登录')
        }
    }

    private fetchOrderList() {
        if (MOCK) {
            const orderList = [
                { orderId: 1, expressId: 111, orderUserName: "Oli", orderAddress: '送至：华东师范大学第五宿舍', orderUserPhone: '18022222222' },
                { orderId: 2, expressId: 112, orderUserName: "Jack", orderAddress: '送至：华东师范大学理科大楼', orderUserPhone: '15122222222' },
            ]
            this.setState({
                orderList
            })
        } else {
            const deliverId = getGlobal('deliverId')
            if (deliverId) {
                serverIns.post('/expressorder/getexpresscontent', {
                    deliverId
                }).then((res) => {
                    console.log('fetchOrderList success', res)
                    // showToast('获取订单成功')
                    if (res.data && res.data.expressOrderData && res.data.expressOrderData.data) {
                        const orderList = res.data.expressOrderData.data.map((oItem) => {
                            let timeStr = ''
                            if (oItem.orderStartTime) {
                                const startTime = oItem.orderStartTime
                                const month = startTime.month
                                const day = startTime.day
                                const hour = ('0' + String(startTime.hours)).slice(-2)
                                const min = ('0' + String(startTime.minutes)).slice(-2)
                                timeStr = `${month}月${day}日  ${hour}:${min}`
                            }
                            return {
                                timeStr,
                                ...oItem
                            }
                        })
                        console.log('fetchOrderList success orderList', orderList)
                        this.setState({
                            orderList
                        })
                    }
                }, (err) => {
                    console.log('fetchOrderList fail', err)
                    showToast('获取订单失败')
                })
            } else {
                this.checkLogin()
            }
        }
    }

    private commitOrderFinish(orderItem) {
        console.log('commitOrderFinish', orderItem)
        const { orderId, expressId } = orderItem
        const deliverId = getGlobal('deliverId')
        if (deliverId) {
            serverIns.post('/deliver/deliverfinishoneorder', {
                pizzaOrderId: orderId,
                expressOrderId: expressId,
                deliverId
            }).then((res) => {
                console.log('commitOrderFinish success', res)
                if (res && Number(res.status) === 200) {
                    showToast('送达成功')
                    this.fetchOrderList()
                } else {
                    showToast('送达失败')
                }
            }, (err) => {
                console.log('commitOrderFinish fail', err)
                showToast('送达失败')
            })
        } else {
            this.checkLogin()
        }
    }

    // private commitAllOrdersFinish() {
    //     console.log('commitAllOrdersFinish')
    //     const deliverId = getGlobal('deliverId')
    //     if (deliverId) {
    //         serverIns.post('/deliver/deliverfree', {
    //             deliverId: 1,
    //         }).then((res) => {
    //             console.log('commitAllOrdersFinish success', res)
    //             if (res && Number(res.status) === 200) {
    //                 showToast('全部送达成功')
    //             } else {
    //                 showToast('全部送达失败')
    //             }
    //         }, (err) => {
    //             console.log('commitAllOrdersFinish fail', err)
    //             showToast('全部送达失败')
    //         })
    //     } else {
    //         this.checkLogin()
    //     }
    // }

    private renderOrderItem(item) {
        if (item && item.orderId) {
            console.log('renderOrderItem', item)
            const orderUserName = item.orderUserName || ''
            const orderAddress = item.orderAddress || ''
            const orderUserPhone = item.orderUserPhone || ''
            const orderTime = item.timeStr || ''
            const isOver = item.state === '已送达'
            return (
                <TouchableOpacity
                    style={styles.orderItem}
                    onPress={() => { }}
                    activeOpacity={0.8}
                >
                    <Text
                        style={styles.itemTxt}
                    >
                        {orderUserName}
                    </Text>
                    <Text
                        style={styles.itemTxt}
                    >
                        {orderAddress}
                    </Text>
                    <Text
                        style={styles.itemTxt}
                    >
                        {orderUserPhone}
                    </Text>
                    <Text
                        style={styles.itemTxt}
                    >
                        {orderTime}
                    </Text>
                    {
                        isOver ? (<Button
                            raised
                            disabled={true}
                            title="已送达"
                        />) : (<Button
                            raised
                            onPress={() => { this.commitOrderFinish(item) }}
                            title="确认送达"
                        />)
                    }
                </TouchableOpacity>
            )
        } else {
            return <View />
        }
    }

    private renderOrderList() {
        const { orderList } = this.state

        let orderListView = undefined

        if (orderList && orderList.length > 0) {
            orderListView = orderList.map((oItem, index) => {
                return (
                    <View key={index}>
                        {this.renderOrderItem(oItem)}
                    </View>
                )
            })
        } else {
            orderListView = (
                <View style={styles.blankWrap}>
                    <Text style={styles.blankTxt}>啥也没有~</Text>
                </View>
            )
        }

        return (
            <View style={styles.orderListWrap}>
                <ScrollView style={styles.orderList}>
                    {orderListView}
                </ScrollView>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationEvents
                    onDidFocus={() => { this.initPage() }}
                />
                <TopHeader title={'骑手订单页面'} />
                {/* <TouchableOpacity onPress={() => {
                    this.navigateToPage('Login')
                }}>
                    <Text>登录</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity onPress={() => {
                    this.navigateToPage('Detail')
                }}>
                    <Text>订单详情</Text>
                </TouchableOpacity> */}
                {this.renderOrderList()}
                {/* <Button
                    raised
                    onPress={() => { this.commitAllOrdersFinish() }}
                    title="全部送达"
                /> */}
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
    foot: {
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 60,
    },
    orderListWrap: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    orderList: {
        flex: 1,
        marginTop: 15,
        marginBottom: 20,
        // backgroundColor: '#ccc',
        // alignItems: 'center',
    },
    flatList: {
    },
    // item
    orderItem: {
        flexDirection: 'column',
        width: 350,
        height: 200,
        marginTop: 20,
        backgroundColor: "orange",
    },
    itemTxt: {
        flex: 1,
        height: 50,
        lineHeight: 55,
        textAlignVertical: 'center',
        // backgroundColor: "orange",
        color: '#000',
        fontSize: 18
    },
    // blank
    blankWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    blankTxt: {
        fontSize: 15,
        color: '#777',
        textAlign: 'center'
    }
});

