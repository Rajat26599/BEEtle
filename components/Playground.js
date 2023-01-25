import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Keypad from './Keypad';
import { useDispatch, useSelector } from 'react-redux';

import { setAnswer } from '../redux/actions/actions';
import LifeBar from './LifeBar';
import YouLostModal from './YouLostModal';

const Playground = () => { 
    const { ans, next } = useSelector(state => state.ansReducer);
    console.log(ans);
    const lives = useSelector(state => state.lifeReducer.lives);
    const dispatch = useDispatch();
  
    const [def, setDef] = useState('');
  
    const fetchDef = async(word) => {
      await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(res => {
        setDef(res.data[0].meanings[0].definitions[0].definition)
      })
      .catch((err) => console.log(err))
    }
  
    const fetchWord = async() => {
      await axios.get(`https://random-word-api.vercel.app/api?words=1&type=uppercase`)
      .then(res => {
        fetchDef(res.data[0]);
        var arr = [];
        res.data[0].split('').forEach(letter => {
          var item = {
            letter: letter,
            hide: true,
          }
          arr.push(item);
        })
        // setAns(arr);
        dispatch(setAnswer(arr))
      })
      .catch((err) => console.log(err))
    }
  
    useEffect(() => {
      fetchWord();
    },[next]);

    // useEffect(() => {
    //   // reset score and update high score if game over
    //   if(lives<=0) {
    //     if(score>highScore) dispatch(updateHighScore(score));
    //     dispatch(resetScore());
    //   }
    // }, [lives]);
  
    return (
      <View style={styles.container}>

        { 
          lives<=0 && <YouLostModal />
        }
        <LifeBar />
        <View style={styles.questionSection}>
          <Image
            style={styles.beetleImg}
            source={require('../assets/beetle.jpg')}
          />
          <View style={styles.question}>
            <Text style={styles.titleText}>{def}</Text>
          </View>
        </View>
  
        <View style={styles.letterContainer}>
        {
          ans.map((item, index) => {
            return <Text style={{...styles.letter, color: item.hide? 'white': 'maroon'}} key={index}>{item.letter}</Text>
          }) 
        }
        </View>
  
        <Keypad />
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    questionSection: {
      flexDirection: 'row',
      marginVertical: 20,
      marginHorizontal: 10
    },
    beetleImg: {
      width: 160,
      height: 200,
    },
    question: {
      flex: 1
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      borderWidth: 2,
      borderColor: '#aaa',
      borderRadius: 10,
      padding: 10
    },
    letterContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 50,
      paddingVertical: 30,
    },
    letter: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'maroon',
      borderBottomWidth: 2,
      padding: 2,
      margin: 2,
    },
  });

  export default Playground;