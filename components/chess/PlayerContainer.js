import { StyleSheet, View, Text } from 'react-native';

const PlayerContainer = (props) => {
    return (
        <View style={styles.playerContainer}>
            <Text>Player {props.playerName}</Text>
            <Text>{props.time}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    playerContainer: {
        flexDirection: 'row',
        justifyContent:  'space-between',
        width: '100%',
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
    }
})

export default PlayerContainer;