import {createActions, handleActions} from "redux-actions";

/* 초기값 */
const initialState = {};

/* 액션 */
const GET_RANKS = 'rank/GET_RANKS';
const GET_TODAY_RANKS = 'rank/GET_TODAY_RANKS';
const SUCCESS = 'rank/SUCCESS';

export const { rank : {getRanks, getTodayRanks, success}} = createActions({
    [GET_RANKS] : result => ({ ranks : result.data.rankings }),
    [GET_TODAY_RANKS] : result => ({ today : result.data }),
    [SUCCESS] : () => ({success : true})
});

/* 리듀서 */
const rankReducer = handleActions({
    [GET_RANKS] : (state, {payload}) => payload,
    [GET_TODAY_RANKS] :(state, {payload}) =>  ({...state, today: payload.today}),
    //[GET_TODAY_RANKS] : (state, {payload}) => payload,
    [SUCCESS] : (state, {payload}) => payload
}, initialState);

export default rankReducer;