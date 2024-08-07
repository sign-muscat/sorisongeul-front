import {combineReducers} from "redux";
import handGameReducer from "./HandGameReducer";
import rankReducer from "./RankReducer";
import lipGameReducer from "./LipGameReducer";

const rootReducer = combineReducers({
    handGameReducer, rankReducer, lipGameReducer
});

export default rootReducer;
