import { Box, Button, Card, Divider, HStack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import LipGamePage from "./LipGamePage";
import DifficultyButton from "../../components/button/DifficultyButton";

function LipGameInfo() {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [difficulty, setDifficulty] = useState("LEVEL_1");

    const descriptionText = [
        "쉬움-쉬운 단어, 짧은 문장, 보통-어려운 단어, 짧은 문장,",
        "어려움-어려운 단어, 긴 문장으로 이루어진 영상이 출제",
        "됩니다."
    ].join('\n');

    const handleStartGame = () => {
        setIsGameStarted(true);
    };

    const handleQuitGame = () => {
        setIsGameStarted(false);
    };

    const handleDifficulty = (e) => {
        setDifficulty(e.target.value);
    }

    return (
        isGameStarted ?
            <LipGamePage difficulty={difficulty} onQuitGame={handleQuitGame}/>
            :
            <>
                <Card p={4} mb={5}>
                    <HStack>
                        <Box>
                            <Image src='/images/main_lip.png' w='300px'/>
                        </Box>
                        <Box>
                            <Text fontWeight={600}>들리지 않아도 알 수 있어요</Text>
                            <Text fontWeight={800} fontSize='20px'>
                                너의 목소리가 보여
                            </Text>
                            <Text>
                                너의 목소리가 보여는 하루에 한 문제씩 오늘의 문제가 제시됩니다.
                                소리가 없는 입모양 영상이 제시되고 입모양을 읽어 정답의 문장이 무엇인지 맞추는 게임입니다. 
                            </Text>
                        </Box>
                    </HStack>
                </Card>

                <Button variant='gradient' w="100%" minH="80px" onClick={handleStartGame}>
                    🙏🤲 게임 시작!
                </Button>

                <DifficultyButton difficulty={difficulty} handleDifficulty={handleDifficulty} description={descriptionText}/>

                <Divider my={5}/>
            </>
    );
}


export default LipGameInfo