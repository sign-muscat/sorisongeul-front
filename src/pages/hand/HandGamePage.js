import {Button, Flex} from "@chakra-ui/react";
import QuitGame from "../../components/button/QuitGame";
import SkipButton from "../../components/button/SkipButton";
import GameHeader from "../../components/game/GameHeader";
import {useRef, useState} from "react";
import HandGameHint from "./HandGameHint";
import HandGameQuestion from "./HandGameQuestion";


function HandGamePage({difficulty, onQuitGame}) {

    const [gameInfo, setGameInfo] = useState({
        totalQuestion: 5,       // 총 문제 개수
        currentQuestion: 1,     // 현재 문제 순번
        correctedAnswer: 0,     // 정답 개수
        skipCount: 0,           // 건너 뛴 횟수
    });

    const questionList = ['바나나', '사과', '금연', '빵집', '소방관'];

    const webcamRef = useRef(null);

    const [capturedImage, setCapturedImage] = useState(null);
    const [countdown, setCountdown] = useState(0);
    const [isFlashing, setIsFlashing] = useState(false);

    const startCountdown = () => {
        setCountdown(3);
        const timer = setInterval(() => {
            setCountdown((prevCount) => {
                if (prevCount === 1) {
                    setIsFlashing(true);
                    setTimeout(() => {setIsFlashing(false);}, 300);

                    clearInterval(timer);
                    captureImage();
                    return null;
                }
                return prevCount - 1;
            });
        }, 1000);
    };

    const captureImage = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);
    };

    return (
        <>
            <QuitGame onQuitGame={onQuitGame}/>

            <GameHeader title='맞혀라! 수수께끼' difficulty={difficulty}
                        gameInfo={gameInfo}/>

            <HandGameQuestion gameInfo={gameInfo} questionList={questionList}
                              webcam={webcamRef} capturedImage={capturedImage} isFlashing={isFlashing}/>

            <HandGameHint/>

            <Flex mt={4} justifyContent='space-between'>
                <SkipButton gameInfo={gameInfo}/>
                <Button colorScheme='teal' variant='outline' size='sm' onClick={startCountdown}
                        isDisabled={(countdown !== 0) || !!capturedImage}>
                    사진 찍기
                </Button>
            </Flex>
        </>
    );
}

export default HandGamePage;