import React from 'react'
import { View, Text } from 'react-native'
import styles from './style';

export default function ResultIMC(props){
    return (
        <View style={styles.resultImc}>
            <Text style={styles.informatipon}>{props.menssageResultIMC}</Text>
            <Text style={styles.number}>{props.ResultIMC}</Text>
        </View>
    );
}