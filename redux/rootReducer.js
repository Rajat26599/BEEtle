import { combineReducers } from "redux";
import { ansReducer, lifeReducer } from "./reducers/reducers"

const rootReducer = combineReducers({
    ansReducer: ansReducer,
    lifeReducer: lifeReducer,
});

export default rootReducer;