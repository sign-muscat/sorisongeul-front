import {
    Button, Text,
    Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalFooter, ModalHeader, ModalOverlay,
    useDisclosure, Input
} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {callRegisterRankAPI} from "../../apis/RankAPICalls";

function RegistRank({difficulty, correctNum, questionList}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useDispatch();
    const [nickname, setNickname] = useState();

    const onChangeHandler = e => setNickname(e.target.value);

    const onClickHandler = () => {
        const rankRequest = { nickname, difficulty, questionList }
        dispatch(callRegisterRankAPI({rankRequest}));
    }

    return (
        <>
            <Button
                colorScheme='yellow'
                size='sm'
                onClick={onOpen}
            >
                결과 저장하기
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontWeight='800'>닉네임을 입력하여 점수를 저장하세요!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight='500' mb='1rem'>
                            {difficulty} 난이도에서 {correctNum}문제를 맞추셨어요.
                            점수를 저장해서 오늘 플레이한 사람들 중 몇 등인지 확인해보세요!
                        </Text>
                        <Input variant='outline' placeholder='닉네임을 입력하세요' onChange={onChangeHandler}/>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='gray' mr={3} onClick={onClose}>
                            취소
                        </Button>
                        <Button colorScheme='yellow' onClick={onClickHandler}>
                            저장
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    );
}

export default RegistRank;