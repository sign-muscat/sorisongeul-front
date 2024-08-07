import {Box, Button, Input, InputGroup, InputRightElement, Text} from "@chakra-ui/react";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callGetVoiceAnswerCheck} from "../../apis/lipGameAPICalls";

function LipGameAnswer({ voiceQuestion }) {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState("");
    const { getVoiceAnswerCheck } = useSelector(state => state.lipGameReducer)

    //임시 테스트용 플레이어 아이디와, 문제 아이디
    const playerId = 1;
    const voiceId = voiceQuestion.voiceId;

    const onChangeHandler = e => setInputText(e.target.value);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // 폼 제출 방지
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        const formData = { playerId, voiceId, inputText };
        console.log("제출할 데이터 : ", formData); // 디버깅용

        // 여기에 submitAnswer 액션 디스패치
        dispatch(callGetVoiceAnswerCheck(formData));
    };

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
                    {/*<Button h='1.75rem' size='sm' onClick={LipSubmit}>제출하기</Button>*/}
                    <Button onClick={handleSubmit} h='1.75rem' size='sm' >제출하기</Button>
                </InputRightElement>
            </InputGroup>
        </>
    );
}


export default LipGameAnswer;
