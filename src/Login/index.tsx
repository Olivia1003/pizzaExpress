/**
 * created by wjy on 2019/2/21
 */

import * as React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
import { showToast } from '../common/utils/Toast'

// server
import { serverIns } from '../common/utils/serverRequest'

// Global
import { getGlobal, setGlobal } from '../common/Global'
interface IState {
    deliverId: string
    password: string
}

interface IProps {
    navigation: any
}
export default class Login extends React.Component<IProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
            deliverId: '',
            password: ''
        }
    }

    private commitLogin() {
        const { deliverId, password } = this.state
        console.log('commitLogin', deliverId, password)
        if (deliverId && password) {
            serverIns.post('/deliver/deliverlogin', {
                deliverId: 1,
                password: "123"
            }).then((res) => {
                console.log('checkLogin success', res)
                if (res && res.data && res.data.deliverId) {
                    showToast('登录成功')
                    setGlobal('deliverId', res.data.deliverId)
                    this.props.navigation.popToTop()
                } else {
                    showToast('登录失败')
                }
            }, (err) => {
                console.log('checkLogin fail', err)
                showToast('登录失败')
            })
        } else {
            showToast('请输入完整')
        }
    }

    render() {
        console.log('render HeaderTab')
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>PizzaRider登录</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.inputRow}>
                        <Text style={styles.name}>账号：</Text>
                        <TextInput
                            style={styles.textInput}
                            value={this.state.deliverId}
                            onChangeText={(value) => {
                                this.setState({
                                    deliverId: value
                                })
                            }}
                        />
                    </View>
                    <View style={styles.inputRow}>
                        <Text style={styles.name}>密码：</Text>
                        <TextInput
                            style={styles.textInput}
                            value={this.state.password}
                            onChangeText={(value) => {
                                this.setState({
                                    password: value
                                })
                            }}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={styles.foot}>
                    <View style={styles.loginBtn} >
                        <Button
                            onPress={() => { this.commitLogin() }}
                            title="登录"
                            color='#fff'
                        />
                    </View>
                </View>
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
        flexGrow: 3,
        //backgroundColor:'pink'
    },
    body: {
        flexGrow: 1,
        height: 100,
        //backgroundColor: 'orange'
    },
    foot: {
        flexGrow: 12,
        //backgroundColor: 'green'
    },

    title: {
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 200,
    },

    inputRow: {
        //flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 40,
        marginRight: 40,
        //backgroundColor: 'yellow'
    },
    name: {
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        lineHeight: 45,
        width: 80,
        height: 50,
        //flexGrow:1,
        backgroundColor: 'pink'
    },
    textInput: {
        marginBottom: 10,
        paddingLeft: 20,
        fontSize: 20,
        flex: 1,
        height: 50,
        backgroundColor: 'orange'
    },
    loginBtn: {
        marginLeft: 140,
        marginRight: 140,
        backgroundColor: 'green',

    }
});

