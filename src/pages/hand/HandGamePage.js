import {Button, Flex} from "@chakra-ui/react";
import QuitGame from "../../components/button/QuitGame";
import SkipButton from "../../components/button/SkipButton";
import GameHeader from "../../components/game/GameHeader";
import {useEffect, useRef, useState} from "react";
import HandGameHint from "./HandGameHint";
import HandGameQuestion from "./HandGameQuestion";
import {useDispatch, useSelector} from "react-redux";
import {callGetWordsAPI} from "../../apis/HandGameAPICalls";
import WordStepper from "./WordStepper";


function HandGamePage({difficulty, onQuitGame}) {

    const [gameInfo, setGameInfo] = useState({
        totalQuestion: 5,       // 총 문제 개수
        currentQuestion: 0,     // 현재 문제 순번
        currentStep: 1,         // 현재 문제의 Step
        correctedAnswer: 0,     // 정답 개수
        skipCount: 0,           // 건너 뛴 횟수
    });

    const webcamRef = useRef(null);
    const dispatch = useDispatch();

    const [capturedImage, setCapturedImage] = useState(null);
    const [countdown, setCountdown] = useState(3000);
    const [isFlashing, setIsFlashing] = useState(false);

    const {questionList} = useSelector(state => state.handGameReducer);

    useEffect(() => {
        dispatch(callGetWordsAPI(difficulty, gameInfo.totalQuestion));
    }, [difficulty, dispatch]);

    const startCountdown = () => {
        setCountdown(3000);
        const timer = setInterval(() => {
            setCountdown((prevCount) => {
                if (prevCount <= 10) { // 10 밀리초 이하일 때
                    setIsFlashing(true);
                    setTimeout(() => {setIsFlashing(false);}, 300);

                    clearInterval(timer);
                    setCapturedImage(webcamRef.current.getScreenshot());
                    return null;
                }
                return prevCount - 10;
            });
        }, 10);
    };


    const increaseSkipCount = (count, current) => {
        setGameInfo({
            ...gameInfo,
            skipCount: count,
            currentQuestion: current,
            currentStep: 1
        });
        setCapturedImage(null);
        setCountdown(3000);
    }

    return (
        questionList && questionList.length > 0 &&
        <>
            <QuitGame onQuitGame={onQuitGame}/>

            <GameHeader title='맞혀라! 수수께끼' difficulty={difficulty}
                        gameInfo={gameInfo}/>

            <HandGameQuestion gameInfo={gameInfo} questionList={questionList}
                              webcam={webcamRef} capturedImage={capturedImage} isFlashing={isFlashing}
                              countdown={countdown}
            />

            <HandGameHint/>

            <Flex mt={4} justifyContent='space-between'>
                <SkipButton gameInfo={gameInfo} increaseSkipCount={increaseSkipCount}/>
                <Button colorScheme='teal' variant='outline' size='sm' onClick={startCountdown}
                        isDisabled={(countdown !== 3000) || !!capturedImage}>
                    사진 찍기
                </Button>
            </Flex>
        </>
    );
}

export default HandGamePage;