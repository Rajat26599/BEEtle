import { Button, StyleSheet, View, Text, Image, TouchableHighlight } from "react-native"

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BEEtle</Text>
            <Image
                style={styles.walkingBeetleImg}
                source={require('../assets/walkingBeetle.gif')}
            />
            <TouchableHighlight underlayColor="#DDDDDD" onPress={() => navigation.navigate('Dashboard')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
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
        backgroundColor: 'white',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'red',
        padding: 10,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: "grey"
    },
    walkingBeetleImg: {
        width: 400,
        height: 400
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ff2222',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default Home;