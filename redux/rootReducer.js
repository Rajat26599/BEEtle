import { combineReducers } from "redux";
import { ansReducer } from "./reducers/reducers"

const rootReducer = combineReducers({
    ansReducer: ansReducer,
});

export default rootReducer;