/**
 * created by wjy on 2019/3/1
 * description: 顶部header
 */

import * as React from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native'


interface IProps {
    title: string;
}

export default class TopHeader extends React.Component<IProps> {
    render() {
        const { title } = this.props
        return (
            <View style={styles.header}>
                 <Text style={styles.title}>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: 'pink'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 60,
    },
});