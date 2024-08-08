import {createActions, handleActions} from "redux-actions";

/* 초기값 */
const initialState = {
    question: '',
    records: [],
    isCorreect: null
};

/* 액션 */
const GET_SOUND_QUESTION = 'game/GET_SOUND_QUESTION';
const GET_SOUND_RECORDS = 'game/GET_SOUND_RECORDS';
const CHECK_CORRECT = 'game/CHECK_CORRECT';
const RESET_CORRECT = 'game/RESET_CORRECT';

export const { game : {getSoundQuestion, getSoundRecords, checkCorrect, resetCorrect}} = createActions({
    [GET_SOUND_QUESTION] : result => ({ sound : result.data }),
    [GET_SOUND_RECORDS] : result => ({ records : result.data }),
    [CHECK_CORRECT] : result => ({ isCorrect : result.data.isCorrect }),
    [RESET_CORRECT] : result => ({ isCorrect : null })
});

/* 리듀서 */
const soundGameReducer = handleActions({
    [GET_SOUND_QUESTION] : (state, {payload}) => ({...state, sound: payload.sound}),
    [GET_SOUND_RECORDS] : (state, {payload}) => ({...state, records: payload.records}),
    [CHECK_CORRECT] : (state, {payload}) => ({...state, isCorrect: payload.isCorrect}),
    [RESET_CORRECT] : (state, {payload}) => ({...state, isCorrect: null})
}, initialState);

export default soundGameReducer;