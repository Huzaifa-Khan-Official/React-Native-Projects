import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { setupPlayer, addTrack } from '../musicPlayerServices'
import MusicPlayer from './screens/MusicPlayer';

const App = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack()
    }

    setIsPlayerReady(isSetup);
  }

  useEffect(() => {
    setup();
  }, [])

  if (!isPlayerReady) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <MusicPlayer />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})