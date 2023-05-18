import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: Colors.secondary600,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.secondary600,
        padding: 12,
        fontFamily: 'open-sans-bold'
    }
})