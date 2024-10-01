import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type CurrencyBtnProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyBtn = (props: CurrencyBtnProps): JSX.Element => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

export default CurrencyBtn

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
    },
    flag: {
        fontSize: 28,
        color: "white",
        marginBottom: 4
    },
    country: {
        fontSize: 16,
        color: "#2d2436",
    }
})