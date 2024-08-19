import {request} from "./api";
import {statusToastAlert} from "../utils/ToastUtils";
import {checkCorrect, getSoundQuestion, getSoundRecords, isAlreadyCorrect} from "../modules/SoundGameReducer";

export const callCheckCorrectAPI = () => {
    return async (dispatch, getState) => {
        try {
            const result = await request(
                'GET',
                `/api/v1/challenge/check-correct`
            );

            console.log('callCheckCorrectAPI result : ', result.data);

            if(result.status === 200) {
                dispatch(isAlreadyCorrect(result));
            }

        } catch {
            const title = '문제가 발생했어요.';
            const desc = '다시 시도해주세요.';
            statusToastAlert(title, desc, 'error');
        }
    }
}

export const callGetSoundAPI = () => {
    return async (dispatch, getState) => {
        try {
            const result = await request(
                'GET',
                `/api/v1/challenge/game-start`
            );

            console.log('callGetSoundAPI result : ', result.data);

            if(result.status === 200) {
                dispatch(getSoundQuestion(result));
            }

        } catch {
            const title = '문제가 발생했어요.';
            const desc = '다시 시도해주세요.';
            statusToastAlert(title, desc, 'error');
        }
    }
}

export const callGetRecordsAPI = (challengeId) => {
    return async (dispatch, getState) => {
        try {
            const queryString = `challengeId=${challengeId}`;

            const result = await request(
                'GET',
                `/api/v1/challenge/records?${queryString}`
            );

            console.log('callGetRecordsAPI result : ', result.data);

            if(result.status === 200) {
                dispatch(getSoundRecords(result));
            }

        } catch {
            const title = '문제가 발생했어요.';
            const desc = '다시 시도해주세요.';
            statusToastAlert(title, desc, 'error');
        }
    }
}

export const callRegisterAnswerAPI = (answerRequest) => {
    return async (dispatch, getState) => {
        try {
            const result = await request(
                'POST',
                '/api/v1/challenge/result',
                {'Content-Type' : 'application/json'},
                answerRequest
            );

            console.log('callRegisterAnswerAPI result : ', result.data);

            if(result.status === 200) {
                dispatch(checkCorrect(result));
            }

        } catch {
            const title = '문제가 발생했어요.';
            const desc = '다시 시도해주세요.';
            statusToastAlert(title, desc, 'error');
        }
    }
}