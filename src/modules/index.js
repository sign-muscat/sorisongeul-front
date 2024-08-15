import {combineReducers} from "redux";
import handGameReducer from "./HandGameReducer";
import rankReducer from "./RankReducer";
import soundGameReducer from "./SoundGameReducer";
import lipGameReducer from "./LipGameReducer";
import friendReducer from "./FriendReducer";

const rootReducer = combineReducers({
    handGameReducer, soundGameReducer, rankReducer, lipGameReducer, friendReducer
});

export default rootReducer;
