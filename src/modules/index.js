import {combineReducers} from "redux";
import handGameReducer from "./HandGameReducer";
import rankReducer from "./RankReducer";
import soundGameReducer from "./SoundGameReducer";

const rootReducer = combineReducers({
    handGameReducer, soundGameReducer, rankReducer
});

export default rootReducer;
