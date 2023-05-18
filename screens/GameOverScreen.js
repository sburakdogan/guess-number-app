import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({guessRound, userNumber, onStartGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <Text style={styles.summaryText}>Your phone needed
                <Text style={styles.highlight}> {guessRound}</Text> rounds to guess the number
                <Text style={styles.highlight}> {userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    summaryText: {
        fontSize: 18,
        padding: 12,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        color: Colors.secondary500
    }
});