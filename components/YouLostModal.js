import { StyleSheet, Modal, Pressable, View, Text, Image } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNext } from "../redux/actions/actions";
import { setLives } from "../redux/actions/lifeActions";

const YouLostModal = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const dispatch = useDispatch();

    const handlePlayAgain = () => {
        setModalVisible(!modalVisible);
        dispatch(toggleNext());
        dispatch(setLives());
    }

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>You Lost!</Text>
                        <Image
                            style={styles.deadBeetleImg}
                            source={require('../assets/deadBeetle.webp')}
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => handlePlayAgain()}>
                            <Text style={styles.textStyle}>Play Again</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    deadBeetleImg: {
        width: 200,
        height: 120,
        marginBottom: 20
    }
})

export default YouLostModal;