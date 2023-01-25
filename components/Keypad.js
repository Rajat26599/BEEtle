import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleHide, toggleNext } from "../redux/actions/actions";
import { resetInvalidLetters, updateInvalidLetters } from "../redux/actions/keypadActions";
import { reduceLives, setLives } from "../redux/actions/lifeActions";
import { incrementScore } from "../redux/actions/scoreActions";

const Keypad = () => {
    const ans = useSelector(state => state.ansReducer.ans);
    const invalidLetters = useSelector(state => state.keypadReducer.invalidLetters)
    const dispatch = useDispatch();
    
    // const [ crossedLetters, setCrossedLetters ] = useState([]);

    const handleChangeHide = (chosen) => {
        dispatch(toggleHide(chosen));

        //do next if all hide false
        var found = false;
        var count = 0;
        ans.forEach(element => {
            if(!element.hide) count++;
            if(element.letter==chosen) found = true;
        });
        //if spelling is complete do next and reset lives and scores
        if(count===ans.length) {
            // setCrossedLetters([]);
            dispatch(resetInvalidLetters());
            dispatch(setLives());
            dispatch(incrementScore());
            dispatch(toggleNext());
        };
        if(!found) {
            dispatch(reduceLives());
            dispatch(updateInvalidLetters(chosen));
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
                                        <TouchableOpacity style={{...styles.letterContainer, backgroundColor: invalidLetters.includes(element)?'red':'pink'}} key={index} onPress={() => handleChangeHide(element)}>
                                            <Text style={styles.keypadLetters}>{element}</Text>
                                            {/* { crossedLetters.includes(element) && <Text style={styles.cross}>X</Text> } */}
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
        borderBottom: 'grooved',
    },
    keypadLetters: {},
    cross: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default Keypad;