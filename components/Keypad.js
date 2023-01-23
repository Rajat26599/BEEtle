import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleHide, toggleNext } from "../redux/actions/actions";
import { reduceLives, setLives } from "../redux/actions/lifeActions";

const Keypad = () => {
    const ans = useSelector(state => state.ansReducer.ans);
    const dispatch = useDispatch();

    const handleChangeHide = (chosen) => {
        dispatch(toggleHide(chosen));

        //do next if all hide false
        var found = false;
        var count = 0;
        ans.forEach(element => {
            if(element.hide===false) count++;
            if(element.letter==chosen) found = true;
        });
        //if spelling is complete do next and reset lives
        if(count===ans.length) {
            dispatch(setLives());
            dispatch(toggleNext());
        };
        if(!found) {
            dispatch(reduceLives());
        };
    }
    return (
        <View style={styles.keypadContainer}>
            {
                ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"].map((row, ind) => {
                    return (
                        <View style={styles.row} key={ind}>
                            {
                                row.split('').map((element, index) => {
                                    return (
                                        <TouchableOpacity style={styles.letterContainer} key={index} onPress={() => handleChangeHide(element)}>
                                            <Text>{element}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    keypadContainer: {
        backgroundColor: 'red',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row'
    },
    letterContainer: {
        backgroundColor: 'pink',
        marginVertical: 2,
        marginHorizontal: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
    }
});

export default Keypad;