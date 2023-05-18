import { SafeAreaView, StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, setGuessRound] = useState(0);

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(roundNumber) {
    setGameIsOver(true);
    setGuessRound(roundNumber);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRound(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen guessRound={guessRound} userNumber={userNumber} onStartGame={startNewGameHandler} />
  }

  return (
    <SafeAreaView style={styles.rootScreen} onLayout={onLayoutRootView}>
      {screen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.primary500
  }
});
