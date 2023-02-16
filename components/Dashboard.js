import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

const Dashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight underlayColor="#DDDDDD" onPress={() => navigation.navigate('Playground')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>BEEtle</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#DDDDDD" onPress={() => navigation.navigate('ChessPlayground')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Chess</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ff2222',
        padding: 10,
        marginVertical: 10,
        minWidth: 300,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default Dashboard;