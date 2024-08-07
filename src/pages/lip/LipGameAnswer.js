import {Box, Button, Input, InputGroup, InputRightElement, Text} from "@chakra-ui/react";
import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callGetVoiceAnswerCheck} from "../../apis/lipGameAPICalls";

function LipGameAnswer({ voiceQuestion , setAnswerData }) {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState("");
    const { getVoiceAnswerCheck } = useSelector(state => state.lipGameReducer)

    //임시 테스트용 플레이어 아이디와, 문제 아이디
    const playerId = 1;
    const voiceId = voiceQuestion?.voiceId;

    const onChangeHandler = e => setInputText(e.target.value);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // 폼 제출 방지
            handleSubmit();
        }
    };

    const handleClearInput = () => {
        setInputText("")
    }

    // const handleSubmit = () => {
    //     const formData = { playerId, voiceId, inputText };
    //     console.log("제출할 데이터 : ", formData); // 디버깅용
    //
    //     // 여기에 submitAnswer 액션 디스패치
    //     dispatch(callGetVoiceAnswerCheck(formData));
    // };


    const handleSubmit = useCallback(() => {
        if(!voiceId) {
            console.error("보이스 아이디 없데 ㅠㅠㅠㅠ")
            return;
        }
        const formData = { playerId, voiceId, inputText };
        console.log("제출할 데이터 : ", formData); // 디버깅용

        // dispatch(callGetVoiceAnswerCheck(formData));
        dispatch(callGetVoiceAnswerCheck(formData)).then(result => {
            setAnswerData(result);
        });
        console.log("상위에서 받아온 문제 데이터 : ",voiceId)
        handleClearInput();
    }, [dispatch, inputText, playerId, voiceId, setAnswerData]);


    return (
        <>
            <Box mb={2}>
                <Text fontSize='13px'>내 도전 횟수: </Text>
                <Text fontSize='13px'>내 최대 유사도: </Text>
            </Box>
            <InputGroup size='md' mb={4}>
                <Input
                    pr='4.5rem'
                    placeholder='추측한 답안을 작성하세요.'
                    fontSize='15px'
                    value={inputText}
                    onChange={onChangeHandler}
                    onKeyDown={handleKeyPress}
                />
                <InputRightElement width='5.25rem'>
                    <Button onClick={handleSubmit} h='1.75rem' size='sm' >제출하기</Button>
                </InputRightElement>
            </InputGroup>
        </>
    );
}


export default LipGameAnswer;
