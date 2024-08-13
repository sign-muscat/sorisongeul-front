import {combineReducers} from "redux";
import handGameReducer from "./HandGameReducer";
import rankReducer from "./RankReducer";
import soundGameReducer from "./SoundGameReducer";
import lipGameReducer from "./LipGameReducer";

const rootReducer = combineReducers({
    handGameReducer, soundGameReducer, rankReducer, lipGameReducer
});

export default rootReducer;
