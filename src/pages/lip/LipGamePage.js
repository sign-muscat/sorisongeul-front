import {useEffect, useRef, useState} from "react";
import Confetti from "react-confetti";
import QuitGame from "../../components/button/QuitGame";
import GameHeader from "../../components/game/GameHeader";
import LipSimilarityTable from "../../components/table/LipSimilarityTable";
import LipGameAnswer from "./LipGameAnswer";
import LipGameHint from "./LipGameHint";
import LipGameQuestion from "./LipGameQuestion";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getVoiceQuestion} from "../../modules/LipGameReducer";
import {callGetVoiceQuestionAPI} from "../../apis/lipGameAPICalls";
import difficulty from "../../components/button/Difficulty";

function LipGamePage({ difficulty }) {
    const dispatch = useDispatch();
    const { voiceQuestion } = useSelector(state => state.lipGameReducer);

    useEffect(()=>{
        dispatch(callGetVoiceQuestionAPI({difficulty}));
    },[dispatch, difficulty])

    return (
        <>
            {
                voiceQuestion ?
                    <>
                        <GameHeader title='너의 목소리가 보여' difficulty={difficulty}/>
                        <LipGameQuestion voiceQuestion={voiceQuestion}/>
                        <LipGameAnswer voiceQuestion={voiceQuestion}/>

                    </>
                    :
                    <div>내용이 없옹</div>
            }
        </>
    );
}


//     return (
//         <>
//             <QuitGame onQuitGame={onQuitGame}/>
//             <GameHeader title='너의 목소리가 보여' difficulty={difficulty}/>
//             <LipGameQuestion/>
//             <LipGameHint/>
//             <LipGameAnswer LipSubmit={LipSubmit} setAnswer={setAnswer} answer={answer} />
//             <LipSimilarityTable dataList={attempts} />
//             {showConfetti &&
//                 <Confetti width={window.innerWidth} height={window.innerHeight}
//                           recycle={false}/>
//             }
//         </>
//
//     );
// }

export default LipGamePage;
