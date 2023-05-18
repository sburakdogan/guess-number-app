import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

function Card({ children }) {
    return (
        <View style={styles.card}>{children}</View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        borderWidth: 6,
        borderColor: Colors.secondary500,
        backgroundColor: Colors.secondary600,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
})