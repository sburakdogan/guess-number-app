import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

function InstructionText({ children, style }) {
    return (
        <Text style={[styles.insturctionText, style]}>
            {children}
        </Text>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    insturctionText: {
        fontFamily: 'open-sans',
        color: Colors.primary500,
        fontSize: 20
    }
})