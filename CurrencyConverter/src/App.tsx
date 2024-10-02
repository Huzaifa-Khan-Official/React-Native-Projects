import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

// Constants
import { currencyByRupee } from './constants'
// Component
import CurrencyBtn from './components/CurrencyBtn'

import Snackbar from 'react-native-snackbar'

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");

  const handleBtnClick = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: "#Ea7773",
        textColor: "#000000"
      })
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      Snackbar.show({
        text: "Invalid input",
        backgroundColor: "#F4BE2C",
        textColor: "#000000"
      })
    }

  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.title}>Currency Converter</Text>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>Rs.</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder='Enter amount in Rupees'
              style={styles.inputField}
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <Pressable style={[
                styles.button,
                targetCurrency === item.name && styles.selected
              ]}
                onPress={() => handleBtnClick(item)}
              >
                <CurrencyBtn {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1d1',
  },
  title: {
    fontSize: 30,
    color: '#000000',
    fontWeight: '800',
    paddingTop: 40,
    paddingHorizontal: 10,
    textAlign: 'center'
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputField: {
    height: 40,
    width: 200,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});