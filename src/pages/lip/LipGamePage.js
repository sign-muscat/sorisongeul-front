import {useEffect, useMemo, useRef, useState} from "react";
import GameHeader from "../../components/game/GameHeader";
import LipGameAnswer from "./LipGameAnswer";
import LipGameQuestion from "./LipGameQuestion";
import {useDispatch, useSelector} from "react-redux";
import {callGetVoiceQuestionAPI} from "../../apis/lipGameAPICalls";
import LipSimilarityTable from "../../components/table/LipSimilarityTable";
import QuitGame from "../../components/button/QuitGame";

function LipGamePage({ difficulty, onQuitGame }) {
    const dispatch = useDispatch();
    const { voiceQuestion } = useSelector(state => state.lipGameReducer);
    const [currentVoiceQuestion, setCurrentVoiceQuestion] = useState(null);
    const [answerData, setAnswerData] = useState(null);

    useEffect(()=>{
        dispatch(callGetVoiceQuestionAPI({difficulty}));
    },[dispatch, difficulty])

    // const memoizedVoiceQuestion = useMemo(() => voiceQuestion, [voiceQuestion]);
    useEffect(() => {
        if (voiceQuestion) {
            setCurrentVoiceQuestion(voiceQuestion); // 변경된 부분
        }
    }, [voiceQuestion]);

    const memoizedAnswerData = useMemo(() => answerData, [answerData]); // 변경된 부분

    //console.log("상위 컴포넌트에서 확인하는 정답 값! : ",memoizedAnswerData)
    return (
        <>
            {
                currentVoiceQuestion ?
                    <>
                        <QuitGame onQuitGame={onQuitGame}/>
                        <GameHeader title='너의 목소리가 보여' difficulty={difficulty}/>
                        <LipGameQuestion voiceQuestion={currentVoiceQuestion}/>
                        <LipGameAnswer voiceQuestion={currentVoiceQuestion} setAnswerData={setAnswerData}/>
                        <LipSimilarityTable dataList={memoizedAnswerData} />
                    </>
                    :
                    <div>문제가 조회되지 않았어요.</div>
            }
        </>
    );
}

//             <LipGameHint/>
//             {showConfetti &&
//                 <Confetti width={window.innerWidth} height={window.innerHeight}
//                           recycle={false}/>


export default LipGamePage;
