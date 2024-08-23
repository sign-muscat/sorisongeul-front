import QuitGame from "../../components/button/QuitGame";
import GameHeader from "../../components/game/GameHeader";
import {useEffect, useState} from "react";
import Confetti from "react-confetti";
import SoundGameQuestion from "./SoundGameQuestion";
import SoundGameAnswer from "./SoundGameAnswer";
import {callGetSoundAPI} from "../../apis/SoundGameAPICalls";
import {useDispatch, useSelector} from "react-redux";
import SoundSuccessModal from "./SoundSuccessModal";
import {useDisclosure} from "@chakra-ui/react";

function SoundGamePage({onQuitGame}) {

    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [showConfetti, setShowConfetti] = useState(false);

    const {sound, isCorrect} = useSelector(state => state.soundGameReducer);

    useEffect(() => {
        dispatch(callGetSoundAPI());
    }, [dispatch]);

    useEffect(() => {
        if(isCorrect) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 5000);
            onOpen();
        }
    }, [isCorrect]);

    const handleModalClose = () => {
        onClose();
        onQuitGame();
    }

    return (
        sound &&
        <>
            <QuitGame onQuitGame={onQuitGame}/>
            <GameHeader title='도전! 소리 탐정'/>
            <SoundGameQuestion url={sound.url}/>
            <SoundGameAnswer sound={sound} isCorrect={isCorrect}/>
            {showConfetti &&
                <Confetti width={window.innerWidth} height={window.innerHeight}
                          recycle={false}/>
            }
            <SoundSuccessModal isOpen={isOpen} onClose={handleModalClose}/>
        </>

    );
}

export default SoundGamePage;