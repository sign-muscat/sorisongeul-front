import {request} from "./api";
import {statusToastAlert} from "../utils/ToastUtils";
import {checkCorrect, getSoundQuestion, getSoundRecords} from "../modules/SoundGameReducer";

export const callGetSoundAPI = (difficulty) => {
    return async (dispatch, getState) => {
        try {
            // const queryString = `difficulty=${difficulty}`;

            // const result = await request(
            //     'GET',
            //     '/game-start?${queryString}'
            // );

            const result = {
                status: 200,
                data: {
                    challengeId: 1,
                    url: 'https://ccrma.stanford.edu/~jos/mp3/harpsi-cs.mp3',
                    isCorrect: false
                }
            }

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
            // const result = await request(
            //     'GET',
            //     '/records'
            // );

            const result = {
                status: 200,
                data: [
                    {
                        inputText: "배고파요",
                        similarity: 25.56
                    },
                    {
                        inputText: "너무 배고파",
                        similarity: 37.22
                    }
                ]
            }

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
            console.log("answerRequest: ", answerRequest);
            // const result = await request(
            //     'POST',
            //     '/check-correct',
            //     {'Content-Type' : 'application/json'},
            //     answerRequest
            // );

            const value = Math.random();
            const result = {
                status: 200,
                data: {
                    isCorrect: false,
                    similarity: value
                }
            };

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