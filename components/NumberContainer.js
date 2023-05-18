import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 3,
        borderColor: Colors.secondary500,
        padding: 12,
        margin: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontWeight: 'bold',
        fontSize: 36,
        color: Colors.secondary500
    }
})