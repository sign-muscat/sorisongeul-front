import {useEffect, useMemo, useRef, useState} from "react";
import GameHeader from "../../components/game/GameHeader";
import LipGameAnswer from "./LipGameAnswer";
import LipGameQuestion from "./LipGameQuestion";
import {useDispatch, useSelector} from "react-redux";
import {callGetVoiceQuestionAPI} from "../../apis/lipGameAPICalls";
import LipSimilarityTable from "../../components/table/LipSimilarityTable";
import QuitGame from "../../components/button/QuitGame";
import SuccessModal from "./SuccessModal";
import Confetti from "react-confetti";
import {useDisclosure} from "@chakra-ui/react";

function LipGamePage({ difficulty, onQuitGame }) {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { voiceQuestion } = useSelector(state => state.lipGameReducer);
    const [currentVoiceQuestion, setCurrentVoiceQuestion] = useState(null);
    const [answerData, setAnswerData] = useState(null);
    const [showConfetti, setShowConfetti] = useState(null);

    const memoizedAnswerData = useMemo(() => answerData, [answerData]);

    useEffect(() => {
        console.log("정답 : ",memoizedAnswerData)
        if (memoizedAnswerData !== null && memoizedAnswerData.payload?.getVoiceAnswerCheck.similarity === 0) {
            setShowConfetti(true);
            //console.log("정답 : ",memoizedAnswerData.similarity === 0)

            setTimeout(() => setShowConfetti(false), 5000);
            onOpen();
            console.log("모달 열림 상태: ", isOpen);
        }
    }, [memoizedAnswerData]);

    useEffect(()=>{
        dispatch(callGetVoiceQuestionAPI());
    },[dispatch])

    // const memoizedVoiceQuestion = useMemo(() => voiceQuestion, [voiceQuestion]);
    useEffect(() => {
        if (voiceQuestion) {
            setCurrentVoiceQuestion(voiceQuestion); // 변경된 부분
        }
    }, [voiceQuestion]);

    const handleModalClose = () => {
        onClose();
        onQuitGame();
    }
    // 변경된 부분

    //console.log("상위 컴포넌트에서 확인하는 정답 값! : ",memoizedAnswerData)
    return (
        <>
            {
                currentVoiceQuestion ?
                    <>
                        <QuitGame onQuitGame={onQuitGame}/>
                        <GameHeader title='너의 목소리가 보여'/>
                        <LipGameQuestion voiceQuestion={currentVoiceQuestion}/>
                        <LipGameAnswer voiceQuestion={currentVoiceQuestion} setAnswerData={setAnswerData}/>
                        <LipSimilarityTable dataList={memoizedAnswerData} />
                        {showConfetti &&
                            <>
                                <Confetti width={window.innerWidth} height={window.innerHeight}
                                          recycle={false}/>
                            </>
                        }
                        <SuccessModal isOpen={isOpen} onClose={handleModalClose}/>
                    </>
                    :
                    <div>문제가 조회되지 않았어요.</div>
            }
        </>
    );
}

// {isModalOpen && (
//     <SuccessModal isOpen={isModalOpen} onClose={handleCloseModal}/>
// )}
//             <LipGameHint/>
//             {showConfetti &&
//                 <Confetti width={window.innerWidth} height={window.innerHeight}
//                           recycle={false}/>


export default LipGamePage;
