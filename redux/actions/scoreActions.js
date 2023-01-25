import actionTypes from "../actionTypes/actionTypes";

export const resetScore = () => {
    return {
        type: actionTypes.RESET_SCORE
    }
}
export const incrementScore = () => {
    return {
        type: actionTypes.INCREMENT_SCORE
    }
}
export const updateHighScore = (score) => {
    return {
        type: actionTypes.UPDATE_HIGHSCORE,
        payload: score
    }
}