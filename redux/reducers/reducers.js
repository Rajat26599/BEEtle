import actionTypes from "../actionTypes/actionTypes"

const initialState = {
    ans: [],
    next: false,
}

const initialLifeState = {
    lives: 5,
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