import {request} from "./api";
import {statusToastAlert} from "../utils/ToastUtils";
import {checkCorrect, getWordImage, getWords, getWordVideo} from "../modules/HandGameReducer";

export const callGetWordsAPI = (difficulty, totalQuestion) => {
    return async (dispatch, getState) => {
        try {
            const queryString = `difficulty=${difficulty}&totalQuestion=${totalQuestion}`;

            const result = await request(
                'GET',
                `/api/v1/sign/game-start?${queryString}`
            );

            console.log('callGetWordsAPI result : ', result.data);

            if(result.status === 200) {
                dispatch(getWords(result));
            }
        } catch {
            const title = '문제가 발생했어요.';
            const desc = '다시 시도해주세요.';
            statusToastAlert(title, desc, 'error');
        }
    }
}

export const callGetWordImageAPI = (riddleId, currentStep) => {
    return async (dispatch, getState) => {
        try {
            const queryString = `riddleId=${riddleId}&step=${currentStep}`;

            const result = await request(
                'GET',
                `/api/v1/sign/question-image?${queryString}`
            );

            console.log('callGetWordImageAPI result : ', result);

            if(result.status === 200) {
                dispatch(getWordImage(result));
            }

        } catch {
            const title = '문제가 발생했어요.';
            const desc = '다시 시도해주세요.';
            statusToastAlert(title, desc, 'error');
        }
    }
}

export const callGetWordVideoAPI = (riddleId) => {
    return async (dispatch, getState) => {
        try {
            const queryString = `riddleId=${riddleId}`;

            const result = await request(
                'GET',
                `/api/v1/sign/question-video?${queryString}`
            );

            console.log('callGetWordVideoAPI result : ', result);

            if (result.status === 200) {
                dispatch(getWordVideo(result));
            }
        } catch {
            const title = '문제가 발생했어요.';
            const desc = '다시 시도해주세요.';
            statusToastAlert(title, desc, 'error');
        }
    }
}

export const callCheckCorrect = (formData) => {
    return async (dispatch, getState) => {
        try {
            // const result = await request(
            //     'POST',
            //     '/result',
            //     {'Content-Type' : 'multipart/form-data'},
            //     formData
            // );

            const value = Math.random() < 0.5;
            const result = {
                status: 200,
                data: {
                    isCorrect: value
                }
            }

            console.log('callCheckCorrect result : ', result);

            if (result.status === 200) {
                dispatch(checkCorrect(result));
            }
        } catch {
            const title = '문제가 발생했어요.';
            const desc = '다시 시도해주세요.';
            statusToastAlert(title, desc, 'error');
        }
    }
}