import {Box, Button, Input, InputGroup, InputRightElement, Text} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import SimilarityTable from "../../components/table/SimilarityTable";
import {useDispatch, useSelector} from "react-redux";
import {callGetRecordsAPI, callRegisterAnswerAPI} from "../../apis/SoundGameAPICalls";
import {resetCorrect} from "../../modules/SoundGameReducer";

function SoundGameAnswer({sound, isCorrect}) {

    const dispatch = useDispatch();
    const [answer, setAnswer] = useState();

    const {records} = useSelector(state => state.soundGameReducer);

    useEffect(() => {
        dispatch(callGetRecordsAPI(sound.challengeId));
        dispatch(resetCorrect());
    }, [isCorrect, dispatch]);

    const onChangeHandler = e => setAnswer(e.target.value);

    const handleClick = () => {
        const answerRequest = {
            challengeId: sound.challengeId,
            inputText: answer
        };
        dispatch(callRegisterAnswerAPI(answerRequest));
    }

    return (
        <>
            <Box mb={2}>
                <Text fontSize='13px'>내 도전 횟수: {records.length}회</Text>
                <Text fontSize='13px'>
                    내 최대 유사도: {records.length > 0 ?
                    Math.max(...records.map(item => item.similarity.toFixed(2))) : '-'}
                </Text>
            </Box>
            <InputGroup size='md' mb={4}>
                <Input
                    pr='4.5rem'
                    placeholder={sound.isCorrect ? '이미 맞힌 문제예요🥳' : '추측한 답안을 작성하세요.'}
                    fontSize='15px'
                    onChange={onChangeHandler}
                />
                <InputRightElement width='5.25rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick} isDisabled={sound.isCorrect}>
                        제출하기
                    </Button>
                </InputRightElement>
            </InputGroup>

            <SimilarityTable records={records}/>
        </>
    );
}

export default SoundGameAnswer;