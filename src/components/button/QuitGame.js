import {HStack, Text} from "@chakra-ui/react";
import {ChevronLeftIcon} from "@chakra-ui/icons";

function QuitGame({onQuitGame}) {
    return (
        <HStack gap={0} color='gray.600' mb={2}>
            <ChevronLeftIcon onClick={onQuitGame} cursor='pointer'/>
            <Text fontSize='15px' fontWeight={500} cursor='pointer' onClick={onQuitGame}>
                그만하기
            </Text>
        </HStack>
    );
}

export default QuitGame;