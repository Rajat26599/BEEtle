import { StyleSheet, View, Text } from "react-native";

const MovesContainer = (props) => {
    return (
        <View style={styles.movesContainer}>
            <View style={styles.movesSubContainer}>
                {
                    props.whiteMoves.map((move, index) => {
                        return <Text key={index}>{move}</Text>
                    })
                }
            </View>
            <View style={styles.movesSubContainer}>
                {
                    props.blackMoves.map((move, index) => {
                        return <Text key={index}>{move}</Text>
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    movesContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 200,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 10,
        overflow: "scroll",
    },
    movesSubContainer: {
        width: '50%',
        alignItems: 'center',
    }
})

export default MovesContainer;