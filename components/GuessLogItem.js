import { View, FlatList, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{roundNumber}. guess: </Text>
            <Text style={styles.text}>{guess}</Text>
        </View>
    )
}

export default GuessLogItem;

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        marginTop: 18,
        padding: 12,
        backgroundColor: Colors.secondary600,
        borderColor: Colors.secondary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 10
    },
    text: {
        color: Colors.primary500,
        fontSize: 18
    }
});