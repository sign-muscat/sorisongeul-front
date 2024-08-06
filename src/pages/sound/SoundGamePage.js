import QuitGame from "../../components/button/QuitGame";
import GameHeader from "../../components/game/GameHeader";
import {useState} from "react";
import Confetti from "react-confetti";
import SoundGameQuestion from "./SoundGameQuestion";
import SoundGameAnswer from "./SoundGameAnswer";
import SimilarityTable from "../../components/table/SimilarityTable";

function SoundGamePage({difficulty, onQuitGame}) {

    // TODO: 게임 진행에 필요한 내용 gameInfo 객체 구조는 좀 더 고민해야 할 부분
    const [gameInfo, setGameInfo] = useState({
        attemptCount: 0,    // 시도 횟수
        attempt: []         // 시도 내용을 객체 배열로 관리 {답안, 유사도}
    });

    // TODO: 정답일 경우 처리 로직
    const [showConfetti, setShowConfetti] = useState(false);

    // TODO: UseEffect 게임 시도 이력 불러오는 로직 (with BE), 불러온 값을 SimilarityTable에 props로 전달

    return (
        <>
            <QuitGame onQuitGame={onQuitGame}/>
            <GameHeader title='도전! 소리 탐정' difficulty={difficulty}/>
            <SoundGameQuestion/>
            <SoundGameAnswer/>
            <SimilarityTable/>
            {showConfetti &&
                <Confetti width={window.innerWidth} height={window.innerHeight}
                          recycle={false}/>
            }
        </>

    );
}

export default SoundGamePage;