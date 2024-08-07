import QuitGame from "../../components/button/QuitGame";
import GameHeader from "../../components/game/GameHeader";
import {useEffect, useState} from "react";
import Confetti from "react-confetti";
import SoundGameQuestion from "./SoundGameQuestion";
import SoundGameAnswer from "./SoundGameAnswer";
import {callGetSoundAPI} from "../../apis/SoundGameAPICalls";
import {useDispatch, useSelector} from "react-redux";

function SoundGamePage({difficulty, onQuitGame}) {

    const dispatch = useDispatch();

    // TODO: 정답일 경우 처리 로직
    const [showConfetti, setShowConfetti] = useState(false);

    const {sound} = useSelector(state => state.soundGameReducer);


    useEffect(() => {
        dispatch(callGetSoundAPI(difficulty));
    }, [difficulty, dispatch]);

    return (
        sound &&
        <>
            <QuitGame onQuitGame={onQuitGame}/>
            <GameHeader title='도전! 소리 탐정' difficulty={difficulty}/>
            <SoundGameQuestion url={sound.url}/>
            <SoundGameAnswer sound={sound}/>
            {showConfetti &&
                <Confetti width={window.innerWidth} height={window.innerHeight}
                          recycle={false}/>
            }
        </>

    );
}

export default SoundGamePage;