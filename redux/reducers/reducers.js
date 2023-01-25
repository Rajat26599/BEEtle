import actionTypes from "../actionTypes/actionTypes"

const initialState = {
    ans: [],
    next: false,
}
const initialLifeState = {
    lives: 5,
}
const initialScoreState = {
    score: 0,
    // highScore: localStorage.getItem('highScore')?localStorage.getItem('highScore'):0,
    highScore: 0
}
const initialKeypadState = {
    invalidLetters: [],
}

export const ansReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case actionTypes.SET_ANS:
            return {...state, ans: payload}
        case actionTypes.TOGGLE_HIDE:
            var arr = [];
            state.ans.forEach(item => {
                if(item.letter==payload) item.hide = false;
                arr.push(item)
            });
            return {...state, ans: arr}
        case actionTypes.TOGGLE_NEXT:
            return {...state, next: !state.next}
        default:
            return state
    }
}

export const lifeReducer = (state=initialLifeState, {type, payload}) => {
    switch(type){
        case actionTypes.SET_LIVES:
            return {...state, lives: 5}
        case actionTypes.REDUCE_LIVES:
            return {...state, lives: state.lives-1}
        default:
            return state;
    }
}

export const scoreReducer = (state=initialScoreState, {type, payload}) => {
    switch(type){
        case actionTypes.RESET_SCORE:
            return {...state, score: initialScoreState.score}
        case actionTypes.INCREMENT_SCORE:
            return {...state, score: state.score+1}
        case actionTypes.UPDATE_HIGHSCORE:
            return {...state, highScore: payload}
        default:
            return state;
    }
}

export const keypadReducer = (state=initialKeypadState, {type, payload}) => {
    switch(type){
        case actionTypes.RESET_INVALID_LETTERS:
            return {...state, invalidLetters: initialKeypadState.invalidLetters}
        case actionTypes.UPDATE_INVALID_LETTERS:
            return {...state, invalidLetters: [...state.invalidLetters, payload]}
        default:
            return state;
    }
}