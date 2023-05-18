import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Colors from "../constants/Colors";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import InstructionText from "../components/InstructionText";
import Card from "../components/Card";
import Title from "../components/Title";
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from "../components/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minNumber = 1;
let maxNumber = 99;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            minNumber = 1;
            userNumber = 99;
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) { //lower or higher
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
            Alert.alert('Do not lie!', 'You know that this guess is not ' + direction + ' than your number', [{ text: 'Sorry!', style: 'default' }]);
            return;
        }

        if (direction === 'lower') {
            maxNumber = currentGuess;
        } else {
            minNumber = currentGuess + 1;
        }

        const newGuess = generateRandomBetween(minNumber, maxNumber, currentGuess);
        setCurrentGuess(newGuess);
        setGuessRounds(prevGuess => [...prevGuess, newGuess]);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                            <Ionicons name="md-add" size={24} color='white' />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color='white' />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLogItem roundNumber={itemData.index + 1} guess={itemData.item}>{itemData.item}</GuessLogItem> }
                    keyExtractor={(item) => item}>
                </FlatList>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    instructionText: {
        marginBottom: 12
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.secondary600,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.secondary600,
        padding: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
})