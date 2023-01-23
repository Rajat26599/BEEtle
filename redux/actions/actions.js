import actionTypes from "../actionTypes/actionTypes";

export const setAnswer = (ans) => {
    return {
        type: actionTypes.SET_ANS,
        payload: ans
    }
}
export const toggleHide = (letter) => {
    return {
        type: actionTypes.TOGGLE_HIDE,
        payload: letter
    }
}
export const toggleNext = () => {
    return {
        type: actionTypes.TOGGLE_NEXT,
    }
}