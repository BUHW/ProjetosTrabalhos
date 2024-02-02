import React from 'react'
import { View, Text } from 'react-native'
import styles from './style';

export default function Title({ text }){
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle} >{text}</Text>
        </View>
    );
}