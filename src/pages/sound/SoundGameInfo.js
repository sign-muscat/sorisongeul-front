import {useState} from "react";
import {Box, Button, Card, Divider, HStack, Image, Text} from "@chakra-ui/react";
import DifficultyButton from "../../components/button/DifficultyButton";
import SoundGamePage from "./SoundGamePage";

function SoundGameInfo() {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [difficulty, setDifficulty] = useState("easy");

    // TODO: 컴포넌트 제대로 안 뽀개서, DifficultyButton에 맞수수 내용 들어가 있음 ㅎ

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
            <SoundGamePage difficulty={difficulty} onQuitGame={handleQuitGame}/>
            :
            <>
                <Card p={4} mb={5}>
                    <HStack>
                        <Box>
                            <Image src='/images/main_sound.png' w='300px'/>
                        </Box>
                        <Box>
                            <Text fontWeight={600}>발음이 조금 달라도 소리 탐정에겐 문제 없다</Text>
                            <Text fontWeight={800} fontSize='20px'>
                                도전! 소리 탐정
                            </Text>
                            <Text>
                                도전! 소리 탐정은 AI로 생성된 농인의 말소리를 듣고, 문장을 맞히는 게임입니다.
                                농인의 발음도 한 번에 알아 맞히는 소리 탐정이 되어 보세요.
                            </Text>
                        </Box>
                    </HStack>
                </Card>
                <Button variant='gradient' w="100%" minH="80px" onClick={handleStartGame}>
                    🔊👂게임 시작!
                </Button>

                <DifficultyButton difficulty={difficulty} handleDifficulty={handleDifficulty}/>

                <Divider my={5}/>
            </>
    );
}

export default SoundGameInfo