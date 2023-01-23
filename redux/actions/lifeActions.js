import actionTypes from "../actionTypes/actionTypes";

export const setLives = () => {
    return {
        type: actionTypes.SET_LIVES
    }
}

export const reduceLives = () => {
    return {
        type: actionTypes.REDUCE_LIVES
    }
}

