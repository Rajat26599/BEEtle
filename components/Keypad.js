import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleHide, toggleNext } from "../redux/actions/actions";

const Keypad = () => {
    const ans = useSelector(state => state.ansReducer.ans);
    const dispatch = useDispatch();

    const handleChangeHide = (chosen) => {
        dispatch(toggleHide(chosen));

        //do next if all hide false
        var count = 0;
        ans.forEach(element => {
            if(element.hide===false) count++;
        });
        if(count===ans.length) dispatch(toggleNext());
    }
    return (
        <View style={styles.keypadContainer}>
            <View style={styles.row1}>
                {
                    "QWERTYUIOP".split('').map((element, index) => {
                        return <TouchableOpacity style={styles.letterContainer} key={index} onPress={() => handleChangeHide(element)}>
                            <Text>{element}</Text>
                        </TouchableOpacity>
                    })
                }
            </View>
            <View style={styles.row2}>
                {
                    "ASDFGHJKL".split('').map((element, index) => {
                        return <TouchableOpacity style={styles.letterContainer} key={index} onPress={() => handleChangeHide(element)}>
                            <Text>{element}</Text>
                        </TouchableOpacity>
                    })
                }
            </View>
            <View style={styles.row3}>
                {   
                    "ZXCVBNM".split('').map((element, index) => {
                        return <TouchableOpacity style={styles.letterContainer} key={index} onPress={() => handleChangeHide(element)}>
                            <Text>{element}</Text>
                        </TouchableOpacity>
                    })
                }
            </View>
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
    row1: {
        flexDirection: 'row'
    },
    row2: {
        flexDirection: 'row'
    },
    row3: {
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