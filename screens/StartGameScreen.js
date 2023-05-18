import { TextInput, StyleSheet, View, Alert, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";
import Title from '../components/Title.js';
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(inputText) {
        setEnteredNumber(inputText);
    }
    function resetInputHandler() {
        setEnteredNumber('');
    }
    function confirmInputHandler() {
        const value = parseInt(enteredNumber);
        if (isNaN(value) || value <= 0 || value > 99) {
            Alert.alert(
                'Invalid number!',
                'The value has to be a number between 1 and 99',
                [{ text: 'Ok', style: 'default', onPress: resetInputHandler }]
            );
            return;
        }

        onPickNumber(value);
    }

    return (
        <View style={styles.rootStyle}> 
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a number:</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    value={enteredNumber}
                    onChangeText={numberInputHandler} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootStyle: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        width: 50,
        borderBottomColor: Colors.primary500,
        borderBottomWidth: 2,
        color: Colors.primary500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})