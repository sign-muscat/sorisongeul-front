import {Box, Button, Input, InputGroup, InputRightElement, Text} from "@chakra-ui/react";
import {useState} from "react";

function SoundGameAnswer() {

    const [answer, setAnswer] = useState();

    const onChangeHandler = e => setAnswer(e.target.value);

    const handleClick = () => {
        // TODO: 답안 제출(정답 확인) 로직 (with BE)
    }

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
                    onChange={onChangeHandler}
                />
                <InputRightElement width='5.25rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        제출하기
                    </Button>
                </InputRightElement>
            </InputGroup>

        </>
    );
}

export default SoundGameAnswer;