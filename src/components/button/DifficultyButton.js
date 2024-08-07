import {Text, Button, Flex, HStack} from "@chakra-ui/react";
import {InfoOutlineIcon} from "@chakra-ui/icons";

function DifficultyButton({difficulty, handleDifficulty}) {
    return (
        <Flex borderRadius="md" justifyContent="space-between" mt={5}>
            <Text fontWeight="bold">• 난이도</Text>
            <Flex flexDirection="column">
                <HStack spacing={2} justify="center">
                    <Button w="80px" h="32px" fontSize={14} fontWeight={500}
                            value="LEVEL_1" onClick={handleDifficulty}
                            variant={difficulty === 'LEVEL_1' ? 'mint' : 'gray'}
                    >
                        쉬움
                    </Button>
                    <Button w="80px" h="32px" fontSize={14} fontWeight={500}
                            value="LEVEL_2" onClick={handleDifficulty}
                            variant={difficulty === 'LEVEL_2' ? 'mint' : 'gray'}
                    >
                        보통
                    </Button>
                    <Button w="80px" h="32px" fontSize={14} fontWeight={500}
                            value="LEVEL_3" onClick={handleDifficulty}
                            variant={difficulty === 'LEVEL_3' ? 'mint' : 'gray'}
                    >
                        어려움
                    </Button>
                </HStack>

                <Flex mt={3}>
                    <InfoOutlineIcon mr={2}/>
                    <Text whiteSpace="pre-wrap" fontSize="12" fontWeight="500">
                        쉬움은 1~2단계, 보통은 3~4단계, 어려움은 5~6단계로{"\n"}
                        이루어진 수어가 출제됩니다.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default DifficultyButton;