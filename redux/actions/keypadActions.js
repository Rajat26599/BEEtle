import actionTypes from "../actionTypes/actionTypes";

export const resetInvalidLetters = () => {
    return {
        type: actionTypes.RESET_INVALID_LETTERS,
    }
}
export const updateInvalidLetters = (letter) => {
    return {
        type: actionTypes.UPDATE_INVALID_LETTERS,
        payload: letter,
    }
}