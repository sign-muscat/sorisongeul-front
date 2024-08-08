import {Button, Flex, useDisclosure} from "@chakra-ui/react";
import QuitGame from "../../components/button/QuitGame";
import SkipButton from "../../components/button/SkipButton";
import GameHeader from "../../components/game/GameHeader";
import {useEffect, useRef, useState} from "react";
import HandGameHint from "./HandGameHint";
import HandGameQuestion from "./HandGameQuestion";
import {useDispatch, useSelector} from "react-redux";
import {callCheckCorrect, callGetWordsAPI} from "../../apis/HandGameAPICalls";
import {statusToastAlert} from "../../utils/ToastUtils";
import { resetCorrect, updateCorrect} from "../../modules/HandGameReducer";
import SuccessModal from "./SuccessModal";
import Confetti from 'react-confetti';
import HandGameFinish from "./HandGameFinish";


function HandGamePage({difficulty, onQuitGame}) {

    const [gameInfo, setGameInfo] = useState({
        totalQuestion: 3,       // 총 문제 개수
        currentQuestion: 0,     // 현재 문제 순번
        currentStep: 1,         // 현재 문제의 Step
        correctedAnswer: 0,     // 정답 개수
        skipCount: 0,           // 건너 뛴 횟수
    });

    const webcamRef = useRef(null);
    const dispatch = useDispatch();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [capturedImage, setCapturedImage] = useState(null);
    const [countdown, setCountdown] = useState(3000);
    const [showConfetti, setShowConfetti] = useState(false);
    const [isGameFinished, setIsGameFinished] = useState(false);

    const {questionList, isCorrect} = useSelector(state => state.handGameReducer);

    useEffect(() => {
        dispatch(callGetWordsAPI(difficulty, gameInfo.totalQuestion));
    }, [difficulty, dispatch]);

    useEffect(() => {
        if (isCorrect !== null && isCorrect) {
            if(gameInfo.currentStep === questionList[gameInfo.currentQuestion].totalStep)
                onOpen();
            else
                nextStep();
        } else if(isCorrect !== null) {
            statusToastAlert(
                "틀렸습니다!",
                "정답과 일치하지 않습니다. 다시 시도해 보세요.",
                "error"
            );
            reset();
        }
    }, [isCorrect, dispatch]);

    const nextStep = () => {
        setGameInfo({
            ...gameInfo,
            currentStep: gameInfo.currentStep + 1
        });
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
        reset();
    }

    const nextQuestion = (correctValue) => {
        dispatch(updateCorrect(gameInfo.currentQuestion, correctValue));

        if(gameInfo.currentQuestion === gameInfo.totalQuestion - 1) {
            setIsGameFinished(true);
        } else {
            setGameInfo({
                ...gameInfo,
                currentQuestion: gameInfo.currentQuestion + 1,
                currentStep: 1,
                correctedAnswer: correctValue ? gameInfo.correctedAnswer + 1 : gameInfo.correctedAnswer
            });
        }
        reset();
    }

    const reset = () => {
        setCapturedImage(null);
        setCountdown(3000);
        dispatch(resetCorrect());
    }

    const startCountdown = () => {
        setCountdown(3000);
        const timer = setInterval(() => {
            setCountdown((prevCount) => {
                if (prevCount <= 10) {
                    clearInterval(timer);
                    captureImage();
                    return null;
                }
                return prevCount - 10;
            });
        }, 10);
    };

    const captureImage = async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);

        const imageBlob = await fetch(imageSrc).then(res => res.blob());

        const formData = new FormData();
        formData.append('file', imageBlob, 'capture.jpg');
        formData.append('riddleId', questionList[gameInfo.currentQuestion].riddleId);
        formData.append('step', gameInfo.currentStep);

        dispatch(callCheckCorrect(formData));
    }

    const increaseSkipCount = (count) => {
        setGameInfo({
            ...gameInfo,
            skipCount: count
        });
        nextQuestion(false);
    };

    return (
        questionList && questionList.length > 0 &&
        <>
            {isGameFinished ? <HandGameFinish questionList={questionList} difficulty={difficulty}/>
            :
                <>
                    <QuitGame onQuitGame={onQuitGame} reset={reset}/>
                    <GameHeader title='맞혀라! 수수께끼' difficulty={difficulty}
                                gameInfo={gameInfo}/>
                    <HandGameQuestion gameInfo={gameInfo} questionList={questionList}
                                      webcam={webcamRef} capturedImage={capturedImage}
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

                    <SuccessModal nextQuestion={nextQuestion} isOpen={isOpen} onClose={onClose}
                                  riddleId={questionList[gameInfo.currentQuestion].riddleId}/>
                    {showConfetti &&
                        <Confetti width={window.innerWidth} height={window.innerHeight}
                                  recycle={false}/>
                    }
                </>
            }

        </>
    );
}

export default HandGamePage;