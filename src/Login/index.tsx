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


export default class Login extends React.Component {
    private onPressLearnMore() {

    }
    render() {
        console.log('render HeaderTab')
        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>PizzaRider</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.inputRow}>
                        <Text style={styles.name}>账号：</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.inputRow}>
                        <Text style={styles.name}>密码：</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                </View>
                <View style={styles.foot}>
                    <View style={styles.loginBtn} >
                        <Button
                            onPress={() => { this.onPressLearnMore }}
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

