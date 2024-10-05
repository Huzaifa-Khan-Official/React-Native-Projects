import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Snackbar from 'react-native-snackbar'
import Icons from './components/Icons'

const App = (): JSX.Element => {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>("");
  const [gameState, setGameState] = useState(new Array(9).fill("empty", 0, 9));

  const relodeGame = () => {
    setIsCross(false);
    setGameWinner("");
    setGameState(new Array(9).fill("empty", 0, 9));
  }

  const checkIsWinner = () => {
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== "empty"
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`)
    } else if (
      gameState[3] === gameState[4] &&
      gameState[3] === gameState[5] &&
      gameState[3] !== "empty"
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`)
    } else if (
      gameState[6] === gameState[7] &&
      gameState[6] === gameState[8] &&
      gameState[6] !== "empty"
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`)
    } else if (
      gameState[0] === gameState[3] &&
      gameState[0] === gameState[6] &&
      gameState[0] !== "empty"
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`)
    } else if (
      gameState[1] === gameState[4] &&
      gameState[1] === gameState[7] &&
      gameState[1] !== "empty"
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`)
    } else if (
      gameState[2] === gameState[5] &&
      gameState[2] === gameState[8] &&
      gameState[2] !== "empty"
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`)
    } else if (
      gameState[0] === gameState[4] &&
      gameState[0] === gameState[8] &&
      gameState[0] !== "empty"
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`)
    } else if (
      gameState[2] === gameState[4] &&
      gameState[2] === gameState[6] &&
      gameState[2] !== "empty"
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`)
    } else if (
      !gameState.includes("empty", 0)
    ) {
      setGameWinner("It's a draw... ⌛️")
    }
  }

  const onChangeItem = (itemNumber: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: "#000000",
        textColor: "#FFFFFF"
      });
    }

    if (gameState[itemNumber] === "empty") {
      gameState[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: "Already marked! ��",
        backgroundColor: "red",
        textColor: "#FFFFFF"
      })
    }

    checkIsWinner();
  }

  return (
    <View>
      <StatusBar />
      <View>
        <Text>Start working on TicTacToe</Text>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})