import {request} from "./api";
import {getVoiceAnswerCheck, getVoiceQuestion} from "../modules/LipGameReducer";

export const callGetVoiceQuestionAPI = ({difficulty}) => {
    return async (dispatch) => {
        const result = await request('GET', `/api/v1/voice/question/${difficulty}`)
        //console.log("callGetVoiceQuestionAPI 응답 결과 : " , result);

        if(result.status === 200) {
            dispatch(getVoiceQuestion(result))
        } else {
            throw new Error("문제를 가져 오는데 실패 했습니다.");
        }
    }
}

export const callGetVoiceAnswerCheck = (recordGameVoiceRequest) => {
    return async (dispatch) => {
        console.log("리퀘값@!!!!! : ", recordGameVoiceRequest)
        const result = await request(
            'POST',
            `/api/v1/voice/check`,
            { 'Content-Type': 'application/json' },
            JSON.stringify(recordGameVoiceRequest)
        )
        console.log("callGetVoiceAnswerCheck 응답 결과 : ", result);

        if(result.status === 200) {
            return dispatch(getVoiceAnswerCheck(result))
        } else {
            throw new Error("문제를 가져 오는데 실패 했습니다.");
        }
    }
}
