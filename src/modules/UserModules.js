import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
    success: false,
    currentUser: null,
};

/* 액션 타입 */
const RESET = 'user/RESET';
const SUCCESS = 'user/SUCCESS';
const GET_USER = 'user/GET_USER';

/* 액션 함수 */
export const { user: { reset, success, getUser } } = createActions({
    [RESET]: () => {},
    [SUCCESS]: () => ({ success: true }),
    [GET_USER]: (result) => ({ currentUser: result }),
});

/* 리듀서 함수 */
const userReducer = handleActions({
    [RESET]: () => initialState,
    [SUCCESS]: (state, { payload }) => payload,
    [GET_USER]: (state, { payload }) => payload,
}, initialState);

export default userReducer;
