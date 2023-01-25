import { combineReducers } from "redux";
import { ansReducer, keypadReducer, lifeReducer, scoreReducer } from "./reducers/reducers"

const rootReducer = combineReducers({
    ansReducer: ansReducer,
    lifeReducer: lifeReducer,
    scoreReducer: scoreReducer,
    keypadReducer: keypadReducer,
});

export default rootReducer;