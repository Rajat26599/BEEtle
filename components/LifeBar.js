import { StyleSheet, Image, View, Text } from "react-native"
import { useSelector } from "react-redux";

const LifeBar = () => {
    const lives = useSelector(state => state.lifeReducer.lives);
    const score = useSelector(state => state.scoreReducer.score);
    const highScore = useSelector(state => state.scoreReducer.highScore);

    return (
        <View style={styles.container}>
            <View style={styles.highScoreContainer}>
                <Text style={styles.scoreLabel}>High Score</Text>
                <Text style={styles.score}>{highScore}</Text>
            </View>

            <View style={styles.heartContainer}>
                {
                    [...Array(lives>0?lives:0)].map((item, index) => {
                        return (
                            <Image
                                style={styles.heartImg}
                                source={require('../assets/heart.png')}
                                key={index}
                            />
                        )
                    })
                }
            </View>

            <View style={styles.scoreContainer}>
                <Text style={styles.scoreLabel}>Score</Text>
                <Text style={styles.score}>{score}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20,
        // marginHorizontal: 10,
        justifyContent: "space-between",
        minWidth: '80%',
        // borderWidth: 1,
    },
    heartContainer: {
        flexDirection: 'row',
    },
    heartImg: {
        height: 30,
        width: 30
    },
    scoreLabel: {
        fontSize: 15,
        fontWeight: 'bold',
        // alignSelf: 'flex-end'
    },
    score: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
    }
});

export default LifeBar;