import { StyleSheet, Image, View } from "react-native"
import { useSelector } from "react-redux";

const LifeBar = () => {
    const lives = useSelector(state => state.lifeReducer.lives);
    
    return (
        <View style={styles.container}>
        {
            [...Array(lives)].map((item, index) => {
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
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 20
    },
    heartImg: {
        height: 30,
        width: 30
    }
});

export default LifeBar;