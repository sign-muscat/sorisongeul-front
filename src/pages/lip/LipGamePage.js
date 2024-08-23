import { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDisclosure } from "@chakra-ui/react";
import GameHeader from "../../components/game/GameHeader";
import LipGameAnswer from "./LipGameAnswer";
import LipGameQuestion from "./LipGameQuestion";
import LipSimilarityTable from "../../components/table/LipSimilarityTable";
import QuitGame from "../../components/button/QuitGame";
import SuccessModal from "./SuccessModal";
import Confetti from "react-confetti";

function LipGamePage({ onQuitGame }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { voiceQuestion } = useSelector(state => state.lipGameReducer);
    const [currentVoiceQuestion, setCurrentVoiceQuestion] = useState(null);
    const [answerData, setAnswerData] = useState(null);
    const [showConfetti, setShowConfetti] = useState(null);

    const memoizedAnswerData = useMemo(() => answerData, [answerData]);

    useEffect(() => {
        console.log("정답 : ", memoizedAnswerData);
        if (memoizedAnswerData !== null && memoizedAnswerData.payload?.getVoiceAnswerCheck.similarity === 0) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 5000);
            onOpen();
        }
    }, [memoizedAnswerData]);

    useEffect(() => {
        if (voiceQuestion) {
            setCurrentVoiceQuestion(voiceQuestion);
        }
    }, [voiceQuestion]);

    const handleModalClose = () => {
        onClose();
        onQuitGame();
    };

    return (
        <>
            {currentVoiceQuestion && (
                <>
                    <QuitGame onQuitGame={onQuitGame} />
                    <GameHeader title='너의 목소리가 보여' />
                    <LipGameQuestion voiceQuestion={currentVoiceQuestion} />
                    <LipGameAnswer voiceQuestion={currentVoiceQuestion} setAnswerData={setAnswerData} />
                    <LipSimilarityTable dataList={memoizedAnswerData} />
                    {showConfetti && (
                        <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />
                    )}
                    <SuccessModal isOpen={isOpen} onClose={handleModalClose} currentVoiceQuestion={currentVoiceQuestion} />
                </>
            )}
        </>
    );
}

export default LipGamePage;
