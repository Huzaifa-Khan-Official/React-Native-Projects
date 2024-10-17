import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export type RootStackParamList = {
  Home: undefined,
  Details: {productId: string}
}

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})