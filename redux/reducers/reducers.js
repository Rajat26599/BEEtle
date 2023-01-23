import actionTypes from "../actionTypes/actionTypes"

const initialState = {
    ans: [],
    next: false
}

export const ansReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case actionTypes.SET_ANS:
            console.log(payload);
            return {...state, ans: payload}
        case actionTypes.TOGGLE_HIDE:
            var arr = [];
            state.ans.forEach(item => {
                if(item.letter==payload) item.hide = !item.hide;
                arr.push(item)
            });
            console.log(arr);
            return {...state, ans: arr}
        case actionTypes.TOGGLE_NEXT:
            return {...state, next: !state.next}
        default:
            return state
    }
}