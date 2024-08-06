import {combineReducers} from "redux";
import handGameReducer from "./HandGameReducer";
import rankReducer from "./RankReducer";

const rootReducer = combineReducers({
    handGameReducer, rankReducer
});

export default rootReducer;
